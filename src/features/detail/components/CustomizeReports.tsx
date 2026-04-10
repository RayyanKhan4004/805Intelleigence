'use client'

import Typography from '@/components/theme/Typography'
import { Button } from '@/components/UI/button'
import { Input } from '@/components/UI/input'
import React, { useRef, useState } from 'react'

function CustomizeReports() {
  const [dragOver, setDragOver] = useState(false)
  const [logo, setLogo] = useState<{ name: string; preview: string } | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return
    const preview = URL.createObjectURL(file)
    setLogo({ name: file.name, preview })
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  return (
    <div className="p-[60px] max-md:px-6 max-sm:px-6 max-lg:px-6">
      <div className="shadow-shadow p-5 rounded-[15px] w-full space-y-4">
        <div>
          <Typography variant="h9" className="font-semibold text-app-primary text-[25px]">
            Customize Your Reports
          </Typography>
          <Typography variant="TableTextSize" className="text-app-greyText text-[14px]">
            Please Set your Report
          </Typography>
        </div>

        {/* Drag-drop logo upload */}
        <div>
          <Typography variant="TableText" className="text-app-primary text-[16px]">
            Upload Company Logo
          </Typography>
          <div
            onDragOver={e => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
            onClick={() => inputRef.current?.click()}
            className={`border-2 border-dashed rounded-[15px] w-full max-w-[526px] h-[131px] flex flex-col items-center justify-center cursor-pointer transition-colors ${
              dragOver ? 'border-app-green bg-green-50' : 'border-app-primary'
            }`}
          >
            {logo ? (
              <div className="flex flex-col items-center gap-1">
                <img src={logo.preview} alt="logo preview" className="h-16 object-contain" />
                <span className="text-[12px] text-app-greyText">{logo.name}</span>
              </div>
            ) : (
              <>
                <span className="font-medium text-[22px] text-app-greyText">
                  {dragOver ? 'Release to upload' : 'Drop File Here or'}
                </span>
                <span className="font-medium text-[22px] text-app-primary">Upload</span>
              </>
            )}
          </div>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onInputChange}
          />
          {logo && (
            <button
              onClick={() => setLogo(null)}
              className="text-[12px] text-red-500 mt-1 hover:underline"
            >
              Remove
            </button>
          )}
        </div>

        <div>
          <Typography variant="TableText" className="text-app-primary text-[16px]">
            Report Title
          </Typography>
          <Input
            className="w-[256px] h-[21px] text-app-primary placeholder:text-app-greyText rounded-[10px] border-app-stroke"
            placeholder="Market Update with 805Intelleigence"
          />
        </div>
        <div>
          <Typography variant="TableText" className="text-app-primary text-[16px]">
            Subheader Text
          </Typography>
          <Input
            className="w-[256px] h-[21px] text-app-primary placeholder:text-app-greyText rounded-[10px] border-app-stroke"
            placeholder="Presented by Sergio Gonzalez"
          />
        </div>
        <div>
          <Typography variant="TableText" className="text-app-primary text-[16px]">
            Footer Text
          </Typography>
          <Input
            className="w-[256px] h-[21px] text-app-primary placeholder:text-app-greyText rounded-[10px] border-app-stroke"
            placeholder="31320 Via Colinas #116 Westlake Village"
          />
        </div>
        <div>
          <Typography variant="TableText" className="text-app-primary text-[16px]">
            'Call Me' Phone Number Button
          </Typography>
          <Input
            className="w-[256px] h-[21px] text-app-primary placeholder:text-app-greyText rounded-[10px] border-app-stroke"
            placeholder="8055687741"
          />
        </div>
        <div>
          <Typography variant="TableText" className="text-app-primary text-[16px]">
            Primary User
          </Typography>
          <Input
            className="w-[256px] h-[21px] text-app-primary placeholder:text-app-greyText rounded-[10px] border-app-stroke"
            placeholder="Sergio Gonzalez"
          />
        </div>
        <div>
          <Typography variant="TableText" className="text-app-primary text-[16px]">
            Theme Color
          </Typography>
          <Input
            className="w-[256px] h-[21px] text-app-primary placeholder:text-app-greyText rounded-[10px] border-app-stroke"
            placeholder="#2e2b22"
          />
        </div>
        <div>
          <Typography variant="TableText" className="text-app-primary text-[16px]">
            Type of image upload
          </Typography>
          <Input
            className="w-[256px] h-[21px] text-app-primary placeholder:text-app-greyText rounded-[10px] border-app-stroke"
            placeholder="Circle"
          />
        </div>
        <div className="flex justify-end gap-[10px] mt-[30px]">
          <Button className="text-[16px] font-medium text-app-primary" variant="outline">
            Cancel
          </Button>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  )
}

export default CustomizeReports
