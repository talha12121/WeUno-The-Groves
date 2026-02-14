const images = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg,svg}', { eager: true });

export const Images = Object.fromEntries(
    Object.entries(images).map(([key, value]) => {
        const imageName = key.split('/').pop().split('.')[0]; // Extract file name
        return [imageName, value.default];
    })
);
