const colorNames = {
    mineShaft: "#252525",
    blueDM: "#2188FF",
    blueLM: "#0366D6",
    lightBlue: "rgba(3, 102, 214, 0.20)",
    darkBlue: "rgba(3, 102, 214, 0.50)",
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    gray: "#6E7E91",
    darkGray: "rgba(54, 54, 54, 0.72)",
    lightGray: "#E5E5E5",
    doveGray: "#6D6D6D",
    iron: "#D1D5DA4D",
    violet: "#090A33",
    ironTransparent: "rgba(209, 213, 218, 0.30)",
    anakiwa: "#8CC2FF",
};

const common = {
    breakpoints: {
        mobileMax: 767,
        tabletVerticalMax: 991,
        tabletHorizontalMax: 1199,
    },
    boxShadow: "0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02)",
    borderRadiusSmall: "4px",
};

export const themeLight = {
    ...common,
    colors: {
        primary: colorNames.blueLM,
        textprimary: colorNames.mineShaft,
        site: {
            background: colorNames.whiteLilac,
            text: colorNames.gray,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.ironTransparent,
            shadow: colorNames.anakiwa,
            background: colorNames.blueLM,
        },
        boxBackground: colorNames.white,
        headerLine: colorNames.lightGray,
        tile: {
            header: colorNames.blueLM,
            border: colorNames.ironTransparent,
            borderHover: colorNames.lightBlue,
        },
        themeSwitch: {
            icon: colorNames.white,
            background: colorNames.gray,
        },
    },
};

export const themeDark = {
    ...common,
    colors: {
        primary: colorNames.blueDM,
        textprimary: colorNames.white,
        site: {
            background: colorNames.mineShaft,
            text: colorNames.white,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.ironTransparent,
            shadow: colorNames.anakiwa,
            background: colorNames.blueDM,
        },
        boxBackground: colorNames.darkGray,
        headerLine: colorNames.lightGray,
        tile: {
            header: colorNames.white,
            border: colorNames.ironTransparent,
            borderHover: colorNames.darkBlue,
        },
        themeSwitch: {
            icon: colorNames.mineShaft,
            background: colorNames.white,
        },
    },
};
