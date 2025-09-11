import { List, Typography } from '@mui/material';
import { ServiceSkill } from './ServiceSkill';
import skillsData from '../../constants/skills.json';

export const ServiceList = ({ title, gradient }: {
	title: string,
	gradient: string,
}) => {
	// Aquí se hardcodean los skills profesionales, simulando lo que sería un fetch a backend
	const skills = skillsData.profesionales.map((item) => ({
		...item,
		icon: item.icon as 'Language' | 'RocketLaunch' | 'Group',
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
												<ServiceSkill key={item.title} {...item} sx={{ justifyContent: 'flex-end', textAlign: 'right' }} />
											))}
										</List>
			</>
		);
};
