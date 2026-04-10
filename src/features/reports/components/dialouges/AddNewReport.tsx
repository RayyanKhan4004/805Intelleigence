import CustomPopup from '@/components/theme/CustomPopUp'
import Typography from '@/components/theme/Typography'
import { Button } from '@/components/UI/button'
import { Input } from '@/components/UI/input'
import { Label } from '@/components/UI/label'
import { Icon } from '@/shared/icons/Icon'
import React from 'react'
import { useLazySearchQuery } from '../../reportsApi'
import type { CountySearchResult } from '../../reportsApi'

function AddNewReport({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedTab, setSelectedTab] = React.useState<'county' | 'city' | 'farm'>('county')
  const [searchQuery, setSearchQuery] = React.useState('')
  const [triggerSearch, { data: searchData, isFetching, reset }] = useLazySearchQuery()

  const tabs: Array<{ label: string; value: 'county' | 'city' | 'farm' }> = [
    { label: 'Counties', value: 'county' },
    { label: 'Cities', value: 'city' },
    { label: 'Farms', value: 'farm' },
  ]

  const handleSearch = () => {
    if (searchQuery.trim()) {
      triggerSearch({ type: selectedTab, q: searchQuery.trim() })
    }
  }

  const handleTabChange = (tab: 'county' | 'city' | 'farm') => {
    setSelectedTab(tab)
    setSearchQuery('')
    reset()
  }

  const results: CountySearchResult[] = searchData?.results ?? []

  return (
    <div>
      <CustomPopup
        className="!w-[486px] overflow-hidden"
        title="Add new Report"
        isOpen={isOpen}
        onClose={onClose}
        footer={
          <Typography className="text-[14px] text-app-greyText">
            Maps by Leaflet | © OpenStreetMap contributors
          </Typography>
        }
      >
        <div className="flex gap-[15px] justify-between">
          {tabs.map(curr => (
            <Button
              className="px-[16px] py-[8px] text-[20px]"
              onClick={() => handleTabChange(curr.value)}
              key={curr.value}
              variant={selectedTab === curr.value ? 'rounded' : 'roundedOutline'}
            >
              {curr.label}
            </Button>
          ))}
        </div>

        <div className="flex gap-[10px] items-center w-full mt-[28px]">
          <Input
            placeholder={selectedTab === 'county' ? 'Los' : 'Search by ' + selectedTab}
            className="border-primary rounded-[12px] w-[275px] h-[56px]"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
          />
          <Button className="h-[56px]" onClick={handleSearch} disabled={isFetching}>
            <Icon name={'WhiteSearchIcon'} width={24} height={24} />
            {isFetching ? 'Searching...' : 'Search'}
          </Button>
        </div>

        {(selectedTab === 'city' || selectedTab === 'farm') && (
          <div className="flex items-center gap-2 px-[16px] mb-[10px]">
            <input type="checkbox" />
            <Label className="text-[14px] text-app-greyText">
              Include all city/zip reports from county
            </Label>
          </div>
        )}

        {results.length > 0 && (
          <div className="mt-[14px]">
            <div className="font-bold text-[16px] text-app-primary mb-[15px]">Search Results</div>
            <div className="flex flex-col gap-[10px]">
              {results.map(value => (
                <div
                  key={value.id}
                  className="flex w-full justify-between rounded-[20px] shadow-shadow p-5"
                >
                  <div>
                    <Typography className="font-bold text-[16px] text-app-primary">
                      {value.name}
                    </Typography>
                    {selectedTab === 'county' && (
                      <>
                        <div className="flex gap-1">
                          <Typography className="font-semibold text-[14px] text-app-greyText">Cities:</Typography>
                          <Typography className="font-semibold text-[14px] text-app-primary">{value.cities_count}</Typography>
                        </div>
                        <div className="flex gap-1">
                          <Typography className="font-semibold text-[14px] text-app-greyText">Farms:</Typography>
                          <Typography className="font-semibold text-[14px] text-app-primary">{value.farms_count}</Typography>
                        </div>
                      </>
                    )}
                  </div>
                  <Button className="h-fit">
                    <Icon name={'Plus'} width={24} height={24} />
                    ADD
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {searchData && results.length === 0 && !isFetching && (
          <Typography className="text-center text-app-greyText mt-4">No results found.</Typography>
        )}
      </CustomPopup>
    </div>
  )
}

export default AddNewReport
