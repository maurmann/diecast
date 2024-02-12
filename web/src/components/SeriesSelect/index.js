import { Select } from '@chakra-ui/react'

const SeriesSelect = (props) => {
    return (
        <Select placeholder='Select a series'>
            <option value='1'>Mainline</option>
            <option value='2'>Premium</option>
        </Select>
    )
}

export default SeriesSelect