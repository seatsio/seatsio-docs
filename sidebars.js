module.exports = {
    tutorial: [
        "Getting Started/getting-started-quick-tutorial/tutorial-create-account",
        "Getting Started/getting-started-quick-tutorial/tutorial-draw-a-floor-plan",
        "Getting Started/getting-started-quick-tutorial/tutorial-create-an-event",
        "Getting Started/getting-started-quick-tutorial/tutorial-show-the-floor-plan-on-your-page",
        "Getting Started/getting-started-quick-tutorial/tutorial-submit-selected-seats",
        "Getting Started/getting-started-quick-tutorial/tutorial-submit-hold-token",
        "Getting Started/getting-started-quick-tutorial/tutorial-book-selected-seats",
        "Getting Started/getting-started-quick-tutorial/tutorial-further-reading",
    ],
    renderer: [
        "Rendering Floor Plans/renderer-embed-a-floor-plan",
        {
            "Configure your floor plan": [
                "Rendering Floor Plans/renderer-configure-your-floor-plan",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-divid",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-container",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-event",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-events",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-workspacekey",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-pricing",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-priceformatter",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-numberofplacestoselect",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-objectwithoutpricingselectable",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-objectwithoutcategoryselectable",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-selectedobjects",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-objecttooltip",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-tooltipinfo",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-language",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-messages",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-maxselectedobjects",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-selectedobjectsinputname",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-unavailablecategories",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/availablecategories",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/selectableobjects",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/filteredcategories",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-objectcolor",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-sectioncolor",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-objectlabel",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-objecticon",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-isobjectvisible",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-cangaselectionbeincreased",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-selectbestavailable", // TODO remove?
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-showrowlines",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-showrowlabels", // TODO DEPRECATED
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-alwaysshowsectioncontents",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-showsectioncontents",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-session",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-holdtoken",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-holdtokeninputname",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-holdonselectforgas",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-holdonselect",  // TODO deprecated
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-regenerateholdtoken", // TODO deprecated
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-legend",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-multiselectenabled",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-showminimap",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-showactivesectiontooltiponmobile",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-showviewfromyourseatonmobile",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-showviewfromyourseatondesktop",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/showsectionpricingoverlay",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-selectionvalidators",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-categories",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/categoryfilter",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-objectcategories",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-objectcategory",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-extraconfig",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-mode",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/inputdevice",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-loading",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-fitto",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-cursortooltip", // TODO deprecated
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-ticketlistings",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-showzoomoutbuttononmobile",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-showfullscreenbutton",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-unifiedobjectpropertiesincallbacks",
                "Rendering Floor Plans/renderer-configure-your-floor-plan/renderer-config-channels",
            ]
        },
        {
            "Style your floor plan": [
                "Rendering Floor Plans/style-your-floor-plan/colorscheme",
                "Rendering Floor Plans/style-your-floor-plan/colors",
                "Rendering Floor Plans/style-your-floor-plan/stylepreset",
                "Rendering Floor Plans/style-your-floor-plan/style",
            ]
        },
        {
            "React to events": [
                "Rendering Floor Plans/renderer-react-to-events",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onchartrendered",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onchartrenderingfailed",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onobjectclicked",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onobjectselected",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onobjectdeselected",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onobjectmouseover",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onobjectmouseout",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onselectedobjectbooked",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onbestavailableselected",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onbestavailableselectionfailed",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onsessioninitialized",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onholdsucceeded",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onholdfailed",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onholdtokenexpired",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onreleaseholdsucceeded",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onreleaseholdfailed",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onselectionvalid",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onselectioninvalid",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onfullscreenopened",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onfullscreenclosed",
                "Rendering Floor Plans/renderer-react-to-events/renderer-events-onfilteredcategorieschanged",
            ]
        },
        {
            "Object properties": [
                "Rendering Floor Plans/renderer-object-properties",
                "Rendering Floor Plans/renderer-object-properties/objectaccessible",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectcategory",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectcenter",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectlabel",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectlabels",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectpricing",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectstatus",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectextradata",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-object-dataperevent",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectforsale",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectselectable",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectselected",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectselectedtickettype",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectisinchannel",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-inselectablechannel",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectobjecttype",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectselect",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectdeselect",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectpulse",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-objectunpulse",
                "Rendering Floor Plans/renderer-object-properties/objectdisplayobjecttype",
                "Rendering Floor Plans/renderer-object-properties/seatparent",
                "Rendering Floor Plans/renderer-object-properties/seatviewfromseaturl",
                "Rendering Floor Plans/renderer-object-properties/seatcompanionseat",
                "Rendering Floor Plans/renderer-object-properties/seatrestrictedview",
                "Rendering Floor Plans/renderer-object-properties/renderer-seat-properties-disabledbysocialdistancingrules",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-ga-capacity",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-ga-numbooked",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-ga-numfree",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-ge-numselected", // Typo here: 'ge' instead of 'ga'
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-ga-selection-per-ticket-type",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-ga-dataperevent",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-sectionobjecttype",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-sectionsectioncategory",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-sectionlabel",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-sectionnumberofselectableobjects",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-sectionnumberofselectedobjects",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-sectionselectablecategories",
                "Rendering Floor Plans/renderer-object-properties/renderer-object-properties-sectionisinteractive",
            ]
        },
        {
            "Rendered chart properties": [
                "Rendering Floor Plans/rendered-chart-properties",
                "Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartselectedobjects",
                "Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartholdtoken",
                "Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartrender",
                "Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartdestroy",
                "Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartrerender",
                "Rendering Floor Plans/rendered-chart-properties/chartresetview",
                "Rendering Floor Plans/rendered-chart-properties/chartstartnewsession",
                "Rendering Floor Plans/rendered-chart-properties/chartlistselectedobjects",
                "Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartselectbestavailableconfig",
                "Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartclearselection",
                "Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartselectobjects",
                "Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartdeselectobjects",
                "Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartselectcategories",
                "Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartdeselectcategories",
                "Rendering Floor Plans/rendered-chart-properties/chartsetavailablecategories",
                "Rendering Floor Plans/rendered-chart-properties/chartsetunavailablecategories",
                "Rendering Floor Plans/rendered-chart-properties/chartsetfilteredcategories",
                "Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartchangeconfig",
                "Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartfindobject",
                "Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartlistcategories",
                "Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartzoomtoselectedobjects",
                "Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartzoomtofilteredcategories",
                "Rendering Floor Plans/rendered-chart-properties/renderer-chart-properties-chartgetreportbyselectability",
            ]
        }
    ],
    api: [
        "REST API/api-overview/api-introduction",
        "REST API/api-overview/api-client-libraries",
        "REST API/api-overview/api-url",
        "REST API/api-overview/api-authentication",
        "REST API/api-overview/api-rate-limit",
        "REST API/api-overview/api-error-handling",
        "REST API/api-overview/api-pagination",
        "REST API/api-overview/api-expanding-objects",
        "REST API/api-overview/api-gzip",
        "REST API/api-overview/api-uri-encoding",
        {
            "Objects": [
                "REST API/api-objects",
                "REST API/api-objects/api-book-objects",
                "REST API/api-objects/api-release-objects",
                "REST API/api-objects/api-temporarily-hold-objects",
                "REST API/api-objects/api-custom-object-status",
                "REST API/api-objects/api-general-admission-areas",
                "REST API/api-objects/api-best-available",
                "REST API/api-objects/api-season-tickets",
                "REST API/api-objects/api-extra-data",
                "REST API/api-objects/api-for-sale-not-for-sale",
                "REST API/api-objects/api-change-object-status-in-batch",
            ]
        },
        {
            "Charts": [
                "REST API/api-charts/api-list-all-charts",
                "REST API/api-charts/api-retrieve-a-chart",
                "REST API/api-charts/api-retrieve-a-chart-version",
                "REST API/api-charts/api-create-a-chart",
                "REST API/api-charts/api-update-a-chart",
                "REST API/api-charts/api-validate-a-chart-version",
                "REST API/api-charts/api-retrieve-a-chart-thumbnail",
                "REST API/api-charts/api-publish-a-draft-version",
                "REST API/api-charts/api-discard-a-draft-version",
                "REST API/api-charts/api-list-charts-in-the-archive",
                "REST API/api-charts/api-move-a-chart-to-the-archive",
                "REST API/api-charts/api-move-a-chart-out-of-the-archive",
                "REST API/api-charts/api-copy-a-chart",
                "REST API/api-charts/api-charts-copy-chart-to-workspace",
                "REST API/api-charts/api-charts-copy-draft-version",
                "REST API/api-charts/api-charts-save-social-distancing-rulesets",
            ]
        },
        {
            "Chart tags": [
                "REST API/api-chart-tags/api-list-tags-of-all-charts",
                "REST API/api-chart-tags/api-add-a-tag-to-a-chart",
                "REST API/api-chart-tags/api-remove-a-tag-from-a-chart",
            ]
        },
        {
            "Events": [
                "REST API/api-events/api-list-events",
                "REST API/api-events/api-retrieve-an-event",
                "REST API/api-events/api-create-an-event",
                "REST API/api-events/api-create-multiple-events",
                "REST API/api-events/api-update-an-event",
                "REST API/api-events/api-delete-an-event",
                "REST API/api-events/api-list-events-for-a-chart",
                "REST API/api-events/api-update-extra-data-for-an-object",
                "REST API/api-events/api-update-extra-data-for-multiple-objects",
                "REST API/api-events/api-retrieve-the-status-of-an-object",
                "REST API/api-events/api-list-status-changes",
                "REST API/api-events/api-list-status-changes-for-an-object",
                "REST API/api-events/update-channels-for-an-event", // yes this is correct
                "REST API/api-events/assign-objects-to-channels", // yes this is correct
            ]
        },
        "REST API/chart-reports",
        {
            "Event reports": [
                "REST API/api-event-reports",
                "REST API/api-event-reports/api-detailed-reports",
                "REST API/api-event-reports/api-summary-reports",
                "REST API/api-event-reports/api-deep-summary-reports",
            ]
        },
        {
            "Usage reports": [
                "REST API/api-usage-reports", // TODO rename this in custom cleanup
                "REST API/api-usage-reports/api-usage-report-all-months",
                "REST API/api-usage-reports/api-usage-report-single-month",
                "REST API/api-usage-reports/api-usage-report-event-month",
            ]
        },
        {
            "Hold tokens": [
                "REST API/api-hold-tokens",
                "REST API/api-hold-tokens/api-the-hold-token-object",
                "REST API/api-hold-tokens/api-retrieve-a-hold-token",
                "REST API/api-hold-tokens/api-create-a-hold-token",
                "REST API/api-hold-tokens/api-change-expiration-date",
            ]
        },
        {
            "Workspaces": [
                "REST API/api-workspaces",
                "REST API/api-workspaces/api-workspaces-create",
                "REST API/api-workspaces/api-workspaces-update",
                "REST API/api-workspaces/api-workspaces-retrieve",
                "REST API/api-workspaces/api-workspaces-list",
                "REST API/api-workspaces/api-workspaces-regenerate-secret-key",
                "REST API/api-workspaces/api-workspace-activate",
                "REST API/api-workspaces/api-workspace-deactivate",
            ]
        }
        // TODO Subaccounts deprecated

    ],
    eventManager: [
        "Event Manager/event-manager-introduction",
        "Event Manager/event-manager-how-to-embed",
        "Event Manager/event-manager-configuring",
        "Event Manager/event-manager-styling",
        "Event Manager/event-manager-reacting-to-events",
    ],
    chartManager: [
        "Chart manager/chart-manager-introduction",
        "Chart manager/chart-manager-how-to-embed",
        "Chart manager/chart-manager-configuring",
        "Chart manager/chart-manager-styling",
        "Chart manager/chart-manager-reacting-to-events",
    ],
    embeddedDesigner: [
        "Embedded Designer/embedded-designer-introduction",
        {
            "Configuration": [
                "Embedded Designer/embedded-designer-configuration",
                "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-divid",
                "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-container",
                "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-secretkey",
                "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-chartkey",
                "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-language",
                "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-features",
                "Embedded Designer/embedded-designer-configuration/mode",
                "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-opendraftdrawing",
                "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-onchartcreated",
                "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-onchartupdated",
                "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-onchartpublished",
                "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-onexitrequested",
                "Embedded Designer/embedded-designer-configuration/embedded-designer-configuration-ondesignerrendered",
                "Embedded Designer/embedded-designer-configuration/ondesignerrenderingfailed",
                "Embedded Designer/embedded-designer-configuration/openlatestdrawing",
            ]
        },
        {
            "Chart designer functions": [
                "Embedded Designer/embedded-designer-functions",
                "Embedded Designer/embedded-designer-functions/embedded-designer-functions-destroy",
            ]
        }
    ]
};
