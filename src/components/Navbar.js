import { useState } from 'react'
import { Paper } from '@mui/material'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined'
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined'
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined'
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined'
import { Link } from 'react-router-dom'

export default function LabelBottomNavigation() {
  const pathname = window.location.pathname
  const [value, setValue] = useState(pathname)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  console.log(value)

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels={true}
        sx={{ bgcolor: 'black', width: '100%' }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          component={Link}
          to="/films"
          sx={{ color: '#ffe818' }}
          label="Films"
          value="/films"
          icon={<TheatersOutlinedIcon sx={{ color: '#ffe818' }} />}
        />
        <BottomNavigationAction
          component={Link}
          to="/people"
          sx={{ color: '#ffe818' }}
          label="People"
          value="/people"
          icon={<PeopleAltOutlinedIcon sx={{ color: '#ffe818' }} />}
        />
        <BottomNavigationAction
          component={Link}
          to="/planets"
          sx={{ color: '#ffe818' }}
          label="Planets"
          value="/planets"
          icon={<TravelExploreOutlinedIcon sx={{ color: '#ffe818' }} />}
        />
        <BottomNavigationAction
          component={Link}
          to="/spieces"
          sx={{ color: '#ffe818' }}
          label="Spieces"
          value="/spieces"
          icon={<AccessibilityNewOutlinedIcon sx={{ color: '#ffe818' }} />}
        />
        <BottomNavigationAction
          component={Link}
          to="/starships"
          sx={{ color: '#ffe818' }}
          label="Starships"
          value="/starships"
          icon={<RocketOutlinedIcon sx={{ color: '#ffe818' }} />}
        />
        <BottomNavigationAction
          component={Link}
          to="/vehicles"
          sx={{ color: '#ffe818' }}
          label="Vehicles"
          value="/vehicles"
          icon={<DirectionsCarFilledOutlinedIcon sx={{ color: '#ffe818' }} />}
        />
      </BottomNavigation>
    </Paper>
  )
}
