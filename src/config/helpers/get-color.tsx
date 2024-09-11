import ImageColors from 'react-native-image-colors';

export const getColorFromImage = async (image: string) => {
	const fallbackColor = 'grey';

	const colors = await ImageColors.getColors(image, {
		fallback: 'grey'
	});

	switch (colors.platform) {
		case 'android':
			return colors.dominant ?? 'grey';

		case 'ios':
			return colors.background ?? fallbackColor;

		default:
			return fallbackColor;
	}
};
