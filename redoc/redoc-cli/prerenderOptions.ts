export const prerenderOptions = {
    disableSearch: true,
    expandSingleSchemaField: true,
    hideDownloadButton: false,
    hideLoading: true,
    hideSchemaTitles: true,
    hideSingleRequestSampleTab: true,
    jsonSampleExpandLevel: 5,
    pathInMiddlePanel: true,
    requiredPropsFirst: false,
    simpleOneOfTypeLabel: true,
    sortPropsAlphabetically: false,
    theme: {
        colors: {
            codeSample: {
                backgroundColor: 'transparent',
            },
            http: {
                basic: '#96A236',
                delete: '#C42D61',
                get: '#44B77A',
                head: '#231F20',
                link: '#908E8F',
                options: '#EBB500',
                patch: '#F05A22',
                post: '#8054B4',
                put: '#1C60BF',
            },
            primary: {
                main: '#231F20',
            },
            responses: {
                error: {
                    backgroundColor: '#C42D61',
                    backgroundColorHover: '#C42D61',
                    color: '#ffffff',
                },
                info: {
                    color: '#F05A22',
                },
                redirect: {
                    color: '#FBC15E',
                },
                success: {
                    backgroundColor: '#44B77A',
                    backgroundColorHover: '#44B77A',
                    color: '#ffffff',
                },
            },
        },
        menu: {
            arrow: {
                color: '#41D9C5',
                size: '1.125em',
            },
            backgroundColor: '#fff',
            textColor: '#908E8F',
            width: '352px',
        },
        rightPanel: {
            backgroundColor: '#fff',
            textColor: '#231F20',
            width: '40%',
        },
        schema: {
            labelsTextSize: '0.875em',
            linesColor: '#bcbbbb',
            nestedBackground: '#f3f3f3',
            requireLabelColor: '#C42D61',
            typeNameColor: '#908E8F',
            typeTitleColor: '#F05A22',
        },
        spacing: {
            unit: 4,
        },
        typography: {
            code: {
                backgroundColor: '#f3f6f7',
                color: '#C42D61',
                fontFamily: 'Inconsolata, monospace',
                fontSize: '.875em',
            },
            fontFamily: 'GT Walsheim Pro, Helvetica, Arial, sans-serif',
            fontSize: '1em',
            fontWeightBold: 700,
            fontWeightRegular: 400,
            headings: {
                fontFamily: 'GT Walsheim Pro, Helvetica, Arial, sans-serif',
                fontSize: '1.875em',
                fontWeight: 400,
                lineHeight: '1.25em',
            },
            links: {
                color: '#F05A22',
                hover: '#F05A22',
            },
        },
    },
};
