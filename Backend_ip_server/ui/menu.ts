import m from "mithril";

const styles = {
    sidebar: {
        position: 'fixed',
        alignItems: 'left',
        top: 0,
        left: 0,
        height: '100%',
        width: '180px', /* Adjust width as needed */
        backgroundColor: 'rgb(34, 32, 32)', /* Sidebar background color */
        color: 'black', /* Text color */
        paddingTop: '20px', /* Space for the header */
        overflowY: 'auto', /* Enable scrolling if content exceeds height */
        borderRight: '1px solid #221c1c', /* Light border to separate sidebar */
    },
    sidebarHeader: {
        padding: '10px 20px',
        textAlign: 'center',
    },
    sidebarLogo: {
        width: '40%', /* Adjust logo size */
        height: 'auto',
        display: 'block',
        margin: '0 auto',
    },
    accordionToggle: {
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgb(34, 32, 32)',
        cursor: 'pointer',
        color: 'white',
        transition: 'background-color 0.3s ease',
    },
    accordionToggleHover: {
        backgroundColor: '#646464', /* Hover background color */
    },
    accordionLink: {
        color: 'black',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
    },
    card: {
        border: 'none',
        alignItems: 'left',
    },
    cardHeader: {
        backgroundColor: 'rgb(44, 37, 37)',
        alignItems: 'left',
        borderBottom: 'none',
        padding: '0',
    },
    cardBody: {
        padding: '0',
    },
    accordionButton: {
        padding: '10px 20px',
        width: '100%',
        textAlign: 'left',
        backgroundColor: 'rgb(116, 115, 115)',
        border: 'none',
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    accordionButtonAfter: {
        marginLeft: 'auto',
    },
    accordionCollapse: {
        width: '100%',
    },
    accordionItem: {
        border: 'none',
    },
    mr2: {
        marginRight: '0.5rem',
    },
    mlAuto: {
        marginLeft: 'auto',
    },
};

const SidebarComponent = {
    view: () => {
        const navigate = (path) => () => m.route.set(path);

        const openOnlineStatus = () => {
            const BaseUrl = window.location.hostname || "localhost";
            window.location.href = `http://${BaseUrl}/device-manager/#!/overview`;
        };

        const listingDevices = () => {
            const BaseUrl = window.location.hostname || "localhost";
            window.location.href = `http://${BaseUrl}/device-manager/#!/devices`;
        };

        const viewFileUpload = () => {
            const BaseUrl = window.location.hostname || "localhost";
            window.location.href = `http://${BaseUrl}/device-manager/#!/admin/files`;
        };

        const openFaultLog = () => {
            const BaseUrl = window.location.hostname || "localhost";
            window.location.href = `http://${BaseUrl}/device-manager/#!/faults`;
        };

        const openTimeSchedule = () => {
            navigate("/time-schedule");
        };

        const openAutoUpdateList = () => {
            navigate("/auto-update");
        };

        const openIP2LG = () => {
            navigate("/ip-phone-provisioning");
        };

        const openLinuxProvisioning = () => {
            navigate("/linux-provisioning");
        };

        const openLinuxSipServer = () => {
            navigate("/sip-server");
        };

        const openHome = () => {
            navigate("/");
        };

        const openSetting = () => {
            navigate("/system-setting");
        };

        return m('.sidebar', { style: styles.sidebar }, [
            m('.sidebar-header', { style: styles.sidebarHeader }, [
                m('img.sidebar-logo', { src: 'favicon.png', alt: 'Coral', style: styles.sidebarLogo })
            ]),
            m('div', { style: { marginTop: '20px' } }, [
                m('ul.nav.flex-column', [
                    m('li', [
                        m('div.accordion-toggle', { onclick: openHome, style: styles.accordionToggle }, [
                            m('i.mr2', { class: 'fa fa-home' }),
                            'Home'
                        ])
                    ]),
                    m('li', [
                        m('div.accordion-toggle', { style: styles.accordionToggle }, [
                            m('i.mr2', { class: 'fa fa-laptop' }),
                            'Devices',
                            m('i.mlAuto', { class: 'fa fa-chevron-right' })
                        ]),
                        m('ul.flex-column', [
                            m('li', [
                                m('a', { href: '#', onclick: openOnlineStatus, style: styles.accordionLink }, 'Online Status')
                            ]),
                            m('li', [
                                m('a', { href: '#', onclick: listingDevices, style: styles.accordionLink }, 'Listing Devices')
                            ]),
                            m('li', [
                                m('a', { href: '#', onclick: viewFileUpload, style: styles.accordionLink }, 'File Upload')
                            ])
                        ])
                    ]),
                    m('li', [
                        m('div.accordion-toggle', { style: styles.accordionToggle }, [
                            m('i.mr2', { class: 'fa fa-server' }),
                            'Device Management',
                            m('i.mlAuto', { class: 'fa fa-chevron-right' })
                        ]),
                        m('ul.flex-column', [
                            m('li', [
                                m('div.accordion-toggle', { style: styles.accordionToggle }, [
                                    'Ip-phones',
                                    m('i.mlAuto', { class: 'fa fa-chevron-right' })
                                ]),
                                m('ul.flex-column', [
                                    m('li', [
                                        m('a', { href: '#', onclick: openIP2LG, style: styles.accordionLink }, 'IP2LG')
                                    ])
                                ])
                            ]),
                            m('li', [
                                m('div.accordion-toggle', { style: styles.accordionToggle }, [
                                    'Servers',
                                    m('i.mlAuto', { class: 'fa fa-chevron-right' })
                                ]),
                                m('ul.flex-column', [
                                    m('li', [
                                        m('a', { href: '#', onclick: openLinuxSipServer, style: styles.accordionLink }, 'SIP Server')
                                    ]),
                                    m('li', [
                                        m('a', { href: '#', onclick: openLinuxProvisioning, style: styles.accordionLink }, '5G Core')
                                    ]),
                                    m('li', [
                                        m('a', { href: '#', style: styles.accordionLink }, 'IoT Server')
                                    ])
                                ])
                            ])
                        ])
                    ]),
                    m('li', [
                        m('div.accordion-toggle', { onclick: openTimeSchedule, style: styles.accordionToggle }, [
                            m('i.mr2', { class: 'fa fa-clock' }),
                            'Scheduling'
                        ])
                    ]),
                    m('li', [
                        m('a', { href: '#', onclick: navigate('/history'), style: styles.accordionLink }, [
                            m('i.mr2', { class: 'fa fa-history' }),
                            'History'
                        ])
                    ]),
                    m('li', [
                        m('a', { href: '#', onclick: openFaultLog, style: styles.accordionLink }, [
                            m('i.mr2', { class: 'fa fa-bug' }),
                            'Fault Log'
                        ])
                    ]),
                    m('li', [
                        m('a', { href: '#', onclick: openSetting, style: styles.accordionLink }, [
                            m('i.mr2', { class: 'fa fa-cog' }),
                            'System Settings'
                        ])
                    ])
                ])
            ])
        ]);
    }
};

export default SidebarComponent;
