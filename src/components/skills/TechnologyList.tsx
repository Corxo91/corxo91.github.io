import { List, Typography } from '@mui/material';
import { TechnologySkill } from './TechnologySkill';
import skillsData from '../../constants/skills.json';

export const TechnologyList = ({ title, gradient }: {
	title: string,
	gradient: string,
}) => {
	// Aquí se hardcodean los skills, simulando lo que sería un fetch a backend
	const skills = skillsData.tecnicos.map((item) => ({
		...item,
		icon: item.icon as 'Web' | 'Code' | 'Storage' | 'Security' | 'Dns',
	}));
		return (
			<>
				<Typography
					variant="h4"
					sx={{
						background: gradient,
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						fontWeight: 800,
						mb: 2,
						textShadow: '0 0 3px #00fff7, 0 0 6px #ff00ea',
					}}
				>
					{title}
				</Typography>
										<List sx={{ width: '100%', maxWidth: 700, mx: 'auto', mb: 4 }}>
											{skills.map((item) => (
												<TechnologySkill key={item.title} {...item} sx={{ justifyContent: 'flex-start', textAlign: 'left' }} />
											))}
										</List>
			</>
		);
};
