import { ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import DnsIcon from '@mui/icons-material/Dns';

interface TechnologySkillProps {
  icon: 'Web' | 'Code' | 'Storage' | 'Security' | 'Dns';
  title: string;
  description: string;
  color: string;
}

import { SxProps, Theme } from '@mui/material';

export const TechnologySkill = ({ icon, title, description, color, sx }: TechnologySkillProps & { sx?: SxProps<Theme> }) => {
  let IconComponent = null;
  if (icon === 'Web') IconComponent = WebIcon;
  if (icon === 'Code') IconComponent = CodeIcon;
  if (icon === 'Storage') IconComponent = StorageIcon;
  if (icon === 'Security') IconComponent = SecurityIcon;
  if (icon === 'Dns') IconComponent = DnsIcon;
  return (
    <ListItem sx={sx}>
      <ListItemIcon sx={{ minWidth: 48 }}>{IconComponent ? <IconComponent sx={{ fontSize: 40, color }} /> : null}</ListItemIcon>
      <ListItemText
        primary={<Typography variant="h6" fontWeight={700} sx={{ textAlign: 'left' }}>{title}</Typography>}
        secondary={<Typography variant="body1" component="span" sx={{ textAlign: 'left' }}>{description}</Typography>}
      />
    </ListItem>
  );
};
