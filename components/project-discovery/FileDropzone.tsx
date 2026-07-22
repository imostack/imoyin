'use client';
import { useRef, useState } from 'react';
import { Upload, X, File as FileIcon } from 'lucide-react';
import {
  ASSET_CATEGORY_OPTIONS,
  MAX_FILES,
  MAX_FILE_BYTES,
  MAX_TOTAL_BYTES,
  formatBytes,
} from '@/lib/project-discovery';

export interface UploadedFile {
  id: string;
  file: File;
  category: string;
}

interface FileDropzoneProps {
  files: UploadedFile[];
  onChange: (next: UploadedFile[]) => void;
}

export function FileDropzone({ files, onChange }: FileDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState('');

  const totalBytes = files.reduce((sum, f) => sum + f.file.size, 0);

  const addFiles = (incoming: FileList | null) => {
    if (!incoming || incoming.length === 0) return;
    setError('');

    const next = [...files];
    let runningTotal = totalBytes;

    for (const file of Array.from(incoming)) {
      if (next.length >= MAX_FILES) {
        setError(`You can attach up to ${MAX_FILES} files.`);
        break;
      }
      if (file.size > MAX_FILE_BYTES) {
        setError(`${file.name} exceeds the ${formatBytes(MAX_FILE_BYTES)} per-file limit.`);
        continue;
      }
      if (runningTotal + file.size > MAX_TOTAL_BYTES) {
        setError(`Total attachments can't exceed ${formatBytes(MAX_TOTAL_BYTES)}.`);
        break;
      }
      runningTotal += file.size;
      next.push({ id: `${file.name}-${file.size}-${crypto.randomUUID()}`, file, category: 'Other' });
    }

    onChange(next);
  };

  const removeFile = (id: string) => {
    onChange(files.filter(f => f.id !== id));
  };

  const setCategory = (id: string, category: string) => {
    onChange(files.map(f => (f.id === id ? { ...f, category } : f)));
  };

  return (
    <div>
      <div
        onDragOver={e => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={e => {
          e.preventDefault();
          setDragActive(false);
          addFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        className={`flex flex-col items-center justify-center gap-3 border border-dashed px-6 py-14 text-center cursor-pointer transition-colors duration-150 ${
          dragActive ? 'border-amber bg-amber/[0.05]' : 'border-rim hover:border-smoke/50'
        }`}
      >
        <Upload size={20} className="text-amber" />
        <p className="text-sm text-fog">Drag files here, or click to browse</p>
        <p className="font-code text-[11px] text-faint">
          Up to {MAX_FILES} files · {formatBytes(MAX_FILE_BYTES)} each · {formatBytes(MAX_TOTAL_BYTES)} total
        </p>
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          onChange={e => {
            addFiles(e.target.files);
            e.target.value = '';
          }}
        />
      </div>

      {error && <p className="font-code text-[11px] text-red-400 mt-3">{error}</p>}

      {files.length > 0 && (
        <div className="mt-6 space-y-3">
          {files.map(f => (
            <div key={f.id} className="flex items-center gap-4 border border-rim px-4 py-3">
              <FileIcon size={16} className="text-smoke flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-fog truncate">{f.file.name}</p>
                <p className="font-code text-[10px] text-faint">{formatBytes(f.file.size)}</p>
              </div>
              <select
                value={f.category}
                onChange={e => setCategory(f.id, e.target.value)}
                style={{ background: 'var(--bg)' }}
                className="border border-rim px-2 py-2 text-xs text-fog focus:outline-none focus:border-smoke/50 transition-colors flex-shrink-0"
              >
                {ASSET_CATEGORY_OPTIONS.map(cat => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => removeFile(f.id)}
                aria-label={`Remove ${f.file.name}`}
                className="text-faint hover:text-amber transition-colors flex-shrink-0"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      <p className="font-code text-[11px] text-faint mt-4 leading-relaxed">
        Attachments aren&apos;t included in autosave — if you reload mid-form, you&apos;ll need to re-attach files.
      </p>
    </div>
  );
}
