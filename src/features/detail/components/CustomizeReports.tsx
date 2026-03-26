import Typography from '@/components/theme/Typography'
import { Button } from '@/components/UI/button'
import { Input } from '@/components/UI/input'
import React from 'react'

function CustomizeReports() {
  return (
    <div className="p-[60px] max-md:px-6 max-sm:px-6 max-lg:px-6">
        <div className=' shadow-shadow p-5 rounded-[15px] w-full'>
      <div>
        <Typography variant="h9" className="font-semibold text-app-primary text-[25px]">
          Customize Your Reports
        </Typography>
        <Typography variant="TableTextSize" className="text-app-greyText text-[14px]">
          Please Set your Report
        </Typography>
      </div>
      <div>
        <Typography variant="TableText" className="text-app-primary text-[16px]">
          Upload Company Logo
        </Typography>
        <div className="border-2 border-dashed border-app-primary rounded-[15px] w-[526px] h-[131px] flex flex-col items-center justify-center  cursor-pointer">
          <span className="font-medium text-[22px] text-app-greyText"> Drop File Here or</span>
          <span className="font-medium text-[22px] text-app-primary">Upload </span>
        </div>
      </div>
      <div>
        <Typography variant="TableText" className="text-app-primary text-[16px]">
          Report Title
        </Typography>
        <Input
          className="w-[256px] h-[21px] text-app-primary placeholder:text-app-greyText rounded-[10px] border-app-stroke "
          placeholder="Market Update with 805Intelleigence"
        />
      </div>
      <div>
        <Typography variant="TableText" className="text-app-primary text-[16px]">
          Subheader Text
        </Typography>
        <Input
          className="w-[256px] h-[21px] text-app-primary placeholder:text-app-greyText rounded-[10px] border-app-stroke "
          placeholder="Presented by Sergio Gonzalez"
        />
      </div>
      <div>
        <Typography variant="TableText" className="text-app-primary text-[16px]">
          Footer Text 
        </Typography>
        <Input
          className="w-[256px] h-[21px] text-app-primary placeholder:text-app-greyText rounded-[10px] border-app-stroke "
          placeholder="31320 Via Colinas #116 Westlake Village"
        />
      </div>
       <div>
        <Typography variant="TableText" className="text-app-primary text-[16px]">
          'Call Me' Phone Number Button 
        </Typography>
        <Input
          className="w-[256px] h-[21px] text-app-primary placeholder:text-app-greyText rounded-[10px] border-app-stroke "
          placeholder="8055687741"
        />
      </div>
        <div>
        <Typography variant="TableText" className="text-app-primary text-[16px]">
         Primary User 
        </Typography>
        <Input
          className="w-[256px] h-[21px] text-app-primary placeholder:text-app-greyText rounded-[10px] border-app-stroke "
          placeholder="Sergio Gonzalez"
        />
      </div>
       <div>
        <Typography variant="TableText" className="text-app-primary text-[16px]">
        Theme Color
        </Typography>
        <Input
          className="w-[256px] h-[21px] text-app-primary placeholder:text-app-greyText rounded-[10px] border-app-stroke "
          placeholder="#2e2b22"
        />
      </div>
       <div>
        <Typography variant="TableText" className="text-app-primary text-[16px]">
        Type of image upload 
        </Typography>
        <Input
          className="w-[256px] h-[21px] text-app-primary placeholder:text-app-greyText rounded-[10px] border-app-stroke "
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
