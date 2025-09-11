import { ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupIcon from '@mui/icons-material/Group';

interface ServiceSkillProps {
  icon: 'Language' | 'RocketLaunch' | 'Group';
  title: string;
  description: string;
  color: string;
}

import { SxProps, Theme } from '@mui/material';

export const ServiceSkill = ({ icon, title, description, color, sx }: ServiceSkillProps & { sx?: SxProps<Theme> }) => {
  let IconComponent = null;
  if (icon === 'Language') IconComponent = LanguageIcon;
  if (icon === 'RocketLaunch') IconComponent = RocketLaunchIcon;
  if (icon === 'Group') IconComponent = GroupIcon;
  return (
    <ListItem sx={sx}>
      <ListItemText
        primary={<Typography variant="h6" fontWeight={700} sx={{ textAlign: 'right' }}>{title}</Typography>}
        secondary={<Typography variant="body1" component="span" sx={{ textAlign: 'right' }}>{description}</Typography>}
      />
      <ListItemIcon sx={{ minWidth: 48 , display: 'flex', justifyContent: 'flex-end'}}>{IconComponent ? <IconComponent sx={{ fontSize: 40, color }} /> : null}</ListItemIcon>
    </ListItem>
  );
};
