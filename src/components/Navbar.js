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
        onChange={handleChange}
        showLabels={true}
        sx={{ bgcolor: 'black', width: '100%' }}
        value={value}
      >
        <BottomNavigationAction
          component={Link}
          icon={<TheatersOutlinedIcon sx={{ color: '#ffe818' }} />}
          label="Films"
          sx={{ color: '#ffe818' }}
          to="/films"
          value="/films"
        />
        <BottomNavigationAction
          component={Link}
          icon={<PeopleAltOutlinedIcon sx={{ color: '#ffe818' }} />}
          label="People"
          sx={{ color: '#ffe818' }}
          to="/people"
          value="/people"
        />
        <BottomNavigationAction
          component={Link}
          icon={<TravelExploreOutlinedIcon sx={{ color: '#ffe818' }} />}
          label="Planets"
          sx={{ color: '#ffe818' }}
          to="/planets"
          value="/planets"
        />
        <BottomNavigationAction
          component={Link}
          icon={<AccessibilityNewOutlinedIcon sx={{ color: '#ffe818' }} />}
          label="Spieces"
          sx={{ color: '#ffe818' }}
          to="/spieces"
          value="/spieces"
        />
        <BottomNavigationAction
          component={Link}
          icon={<RocketOutlinedIcon sx={{ color: '#ffe818' }} />}
          label="Starships"
          sx={{ color: '#ffe818' }}
          to="/starships"
          value="/starships"
        />
        <BottomNavigationAction
          component={Link}
          icon={<DirectionsCarFilledOutlinedIcon sx={{ color: '#ffe818' }} />}
          label="Vehicles"
          sx={{ color: '#ffe818' }}
          to="/vehicles"
          value="/vehicles"
        />
      </BottomNavigation>
    </Paper>
  )
}
