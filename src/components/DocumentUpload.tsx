import { useState, useRef, ChangeEvent, useEffect } from 'react';
import { FileText, Upload, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface DocumentUploadProps {
  onFilesChange?: (files: File[]) => void;
  onUploadingChange?: (uploading: boolean) => void;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ 
  onFilesChange, 
  onUploadingChange 
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  const ALLOWED_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  useEffect(() => {
    onFilesChange?.(files);
  }, [files, onFilesChange]);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    
    onUploadingChange?.(true);
    
    try {
      const selectedFiles = Array.from(e.target.files);
      
      // Validate files
      const invalidFiles = selectedFiles.filter(
        file => !ALLOWED_TYPES.includes(file.type) || file.size > MAX_FILE_SIZE
      );

      if (invalidFiles.length > 0) {
        throw new Error('Please upload only PDF, DOC, or DOCX files (max 10MB each)');
      }

      setFiles(prev => [...prev, ...selectedFiles]);
      toast.success(`${selectedFiles.length} file(s) added successfully`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Invalid file(s)');
    } finally {
      onUploadingChange?.(false);
      // Reset input to allow re-uploading same files
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files?.length) {
      const fakeEvent = {
        target: { files: e.dataTransfer.files }
      } as unknown as ChangeEvent<HTMLInputElement>;
      handleFileChange(fakeEvent);
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="documents">Upload Application *</Label>
      
      <div
        className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors hover:border-primary"
        onClick={triggerFileInput}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center gap-2">
          <Upload className="h-8 w-8 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-muted-foreground">
              PDF, DOC, DOCX (Max 10MB each)
            </p>
          </div>
        </div>
        
        <Input
          ref={fileInputRef}
          id="documents"
          name="document"
          type="file"
          multiple
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div 
              key={`${file.name}-${index}`}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <div className="overflow-hidden">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(file.size / 1024).toFixed(1)} KB • {file.type.split('/')[1].toUpperCase()}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="text-destructive hover:text-destructive/80"
                aria-label="Remove file"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;