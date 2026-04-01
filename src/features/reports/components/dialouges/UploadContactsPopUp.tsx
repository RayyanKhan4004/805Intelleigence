'use client'

import CustomPopup from '@/components/theme/CustomPopUp'
import { Button } from '@/components/UI/button'
import { useRef, useState } from 'react'

function UploadContactsPopUp({ isOpen, onClose }: { isOpen: boolean; onClose: any }) {
  const [dragOver, setDragOver] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (f: File) => {
    if (!f.name.endsWith('.csv')) return
    setFile(f)
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const f = e.dataTransfer.files[0]
    if (f) handleFile(f)
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) handleFile(f)
  }

  const handleClose = () => {
    setFile(null)
    onClose()
  }

  return (
    <div>
      <CustomPopup title="Import Contacts" isOpen={isOpen} onClose={handleClose}>
        <div>
          <span className="text-[14px] text-app-greyText">
            Need help formatting your CSV file?{' '}
            <span className="text-[14px] text-app-primary cursor-pointer hover:underline">
              Download our example CSV file template here.
            </span>
          </span>
        </div>

        <div className="mt-4">
          <div className="font-bold text-[20px] text-app-primary mb-2">Choose CSV File</div>

          {/* Drop zone */}
          <div
            onDragOver={e => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
            onClick={() => inputRef.current?.click()}
            className={`border-2 border-dashed rounded-[15px] w-full h-[131px] flex flex-col items-center justify-center cursor-pointer transition-colors select-none ${
              dragOver
                ? 'border-app-green bg-green-50'
                : file
                ? 'border-app-green bg-green-50/40'
                : 'border-app-primary'
            }`}
          >
            {file ? (
              <div className="flex flex-col items-center gap-1">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-app-green">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="font-medium text-[16px] text-app-primary">{file.name}</span>
                <span className="text-[12px] text-app-greyText">
                  {(file.size / 1024).toFixed(1)} KB
                </span>
              </div>
            ) : (
              <span className="font-medium text-[22px] text-app-primary">
                Upload{' '}
                <span className="font-medium text-[22px] text-app-greyText">
                  {dragOver ? 'Release to upload' : 'or Drop File Here'}
                </span>
              </span>
            )}
          </div>

          <input
            ref={inputRef}
            type="file"
            accept=".csv"
            className="hidden"
            onChange={onInputChange}
          />

          {file && (
            <button
              onClick={() => setFile(null)}
              className="text-[12px] text-red-500 mt-1 hover:underline"
            >
              Remove file
            </button>
          )}
        </div>

        <div className="flex justify-end gap-[10px] mt-[30px]">
          <Button variant="outline" onClick={handleClose}>Cancel</Button>
          <Button disabled={!file}>Upload</Button>
        </div>
      </CustomPopup>
    </div>
  )
}

export default UploadContactsPopUp
