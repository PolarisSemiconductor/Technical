// documents-data.js - Host this file externally (GitHub Pages, CDN, or your server)
window.DocumentRepository = window.DocumentRepository || {};

window.DocumentRepository.data = [
    {
        id: 1,
        slug: "bk19-spotlight",
        title: "BK19 Spotlight: Rad-Hard, Low-Noise DC Voltage Regulator",
        excerpt: "The BK19 series consists of efficient, low-noise, and radiation-hard voltage regulators with a space-qualified LDO, good PSRR, low ground current, enable/disable functionality, over-temp protection and over-current protection....",
        abstract: "The BK19 series consists of efficient, low-noise, and radiation-hard voltage regulators with a space-qualified LDO, good PSRR, low ground current, enable/disable functionality, over-temp protection and over-current protection. BK19 provides an adjustable voltage output set by two feedback resistors. This series is available with a 1.2-2V output.",
        date: "January 10, 2025",
        type: "product-spotlight",
        typeLabel: "Product Spotlight",
        products: ["BK19"], // Simplified to just product names for easier filtering
        productData: [
            { name: "BK19", url: "https://www.polarissemiconductor.com/bk19" }
        ],
        pdfUrl: "https://www.polarissemiconductor.com/s/BK19_Spotlight.pdf"
    },
    {
        id: 2,
        slug: "bt29-spotlight",
        title: "BT29 Spotlight: Switching-Free DC Boost Regulator",
        excerpt: "The BT29 series consists of efficient, compact and low-noise DC boost voltage regulators that operate without using switching. The chip provides good ripple rejection performance, low ground current, enable/disable functionality, over-temperature and over-current protection...",
        abstract: "The BT29 series consists of efficient, compact and low-noise DC boost voltage regulators that operate without using switching. The chip provides good ripple rejection performance, low ground current, enable/disable functionality, over-temperature and over-current protection. BT291D50H provides an adjustable voltage output of up to VOUT = 5V, set by two feedback resistors.",
        date: "February 25, 2025",
        type: "product-spotlight",
        typeLabel: "Product Spotlight",
        products: ["BT29"],
        productData: [
            { name: "BT29", url: "https://www.polarissemiconductor.com/bt29" }
        ],
        pdfUrl: "https://www.polarissemiconductor.com/s/BT29_Spotlight.pdf"
    },
    {
        id: 3,
        slug: "bk30-spotlight",
        title: "BK30 Spotlight: Ultralow Noise DC Voltage Regulator",
        excerpt: "The BK30 series consists of extremely low-noise DC voltage regulators with outstanding ripple rejection, over-temperature/current protection, current limit, power-good, enable/UVLO and fast-start-up....",
        abstract: "The BK30 series consists of extremely low-noise DC voltage regulators with outstanding ripple rejection, over-temperature/current protection, current limit, power-good, enable/UVLO and fast-start-up. BK30 provides an adjustable voltage output set by a single resistor. This series is available in 0-2V, 2-4V and 4-6V output variants.",
        date: "April 28, 2025",
        type: "product-spotlight",
        typeLabel: "Product Spotlight",
        products: ["BK30"],
        productData: [
            { name: "BK30", url: "https://www.polarissemiconductor.com/bk30" }
        ],
        pdfUrl: "https://www.polarissemiconductor.com/s/BK30_Spotlight.pdf"
    },
    {
        id: 4,
        slug: "bk29-spotlight",
        title: "BK29 Spotlight: Rad-Tolerant DC Voltage Regulator",
        excerpt: "The BK29 series consists of efficient, radiation tolerant voltage regulators with good ripple rejection, low ground current, enable/disable functionality, over-temperature and over- current protection...",
        abstract: "The BK29 series consists of efficient, radiation tolerant voltage regulators with good ripple rejection, low ground current, enable/disable functionality, over-temperature and over- current protection. BK29 provides an adjustable voltage output set by two feedback resistors. This series is available in 1.2-2V, 2-4V, and 4-5V output variants.",
        date: "June 9, 2025",
        type: "product-spotlight",
        typeLabel: "Product Spotlight",
        products: ["BK29"],
        productData: [
            { name: "BK29", url: "https://www.polarissemiconductor.com/bk29" }
        ],
        pdfUrl: "https://www.polarissemiconductor.com/s/BK30_Spotlight.pdf"
    },
    {
        id: 5,
        slug: "tech-brief",
        title: "Polaris Semiconductor Technical Brief Sheet",
        excerpt: "This document serves as a high-level technology and product summary for Polaris Semiconductor's innovative voltage regulation solutions. The semiconductor industry faces a significant challenge...",
        abstract: "This document serves as a high-level technology and product summary for Polaris Semiconductor's innovative voltage regulation solutions. The semiconductor industry faces a significant challenge in developing DC voltage regulators that can simultaneously deliver extremely low electromagnetic interference, compact size, high electrical efficiency, and reliability in extreme environments. Existing voltage regulators cannot adequately address these competing requirements, creating a critical capability gap for demanding applications.<br><br>Polaris Semiconductor's patented solution combines radiation-hardened GaAs-based optocoupler devices with silicon-based analog integrated circuits in an inductorless topology that breaks traditional efficiency limits. The technology delivers 60-85% peak efficiency while maintaining the low noise characteristics of linear regulators, effectively providing 1.2x-2x better efficiency than conventional linear regulators without the electromagnetic interference drawbacks of switching regulators. The product portfolio spans multiple device families supporting various voltage and current requirements, making them ideal for RF electronics, precision instrumentation, medical imaging, and other noise-sensitive applications where superior size, weight, power, and performance characteristics are essential.",
        date: "June 10, 2025",
        type: "technology-overview",
        typeLabel: "Technology Overview",
        products: ["BK29", "BK30", "BK19", "BT29"],
        productData: [
            { name: "BK29", url: "https://www.polarissemiconductor.com/bk29" },
            { name: "BK30", url: "https://www.polarissemiconductor.com/bk30" },
            { name: "BK19", url: "https://www.polarissemiconductor.com/bk19" },
            { name: "BT29", url: "https://www.polarissemiconductor.com/bt29" }
        ],
        pdfUrl: "https://www.polarissemiconductor.com/s/2025-03-10-Polaris-Semiconductor-Technical-Summary.pdf"
    },
    {
        id: 6,
        slug: "WP",
        title: "Breaking the Rules of Linear Regulators: High Efficiency Buck and Boost Conversion Without Switching",
        excerpt: "This white paper introduces Polaris Semiconductor's Enhanced Linear Regulator (ELR) technology, which overcomes the fundamental efficiency limitations of traditional linear voltage regulators while preserving their...",
        abstract: "This white paper introduces Polaris Semiconductor's Enhanced Linear Regulator (ELR) technology, which overcomes the fundamental efficiency limitations of traditional linear voltage regulators while preserving their advantages of simplicity, low component count, and extremely low noise operation. Conventional Low-Dropout regulators are constrained by their resistive voltage regulation topology, while switching regulators introduce electromagnetic interference that degrades performance in noise-sensitive applications.<br><br>The ELR architecture employs a patented approach co-packaging silicon-based LDOs with high-performance GaAs-based photovoltaic-output optocouplers in multi-chip modules. These optocouplers achieve unprecedented efficiencies exceeding 52% by converting optical power from LED sections to photovoltaic devices, effectively recycling power normally wasted as heat. The technology delivers overall regulator efficiencies between 60-85%, far surpassing traditional LDO limits, while enabling both buck and boost conversion without switching noise.<br><br>Multiple product families address diverse applications ranging from general-purpose use to ultra-low-noise applications achieving sub-microvolt output noise with exceptional power supply rejection ratios, and radiation-hardened variants for space applications. The ELR technology eliminates traditional trade-offs between efficiency, noise performance, and component complexity in DC power management for RF electronics, precision instrumentation, medical devices, and aerospace systems.",
        date: "June 12, 2025",
        type: "white-papers",
        typeLabel: "White Paper",
        products: ["BK29", "BK30", "BK19", "BT29"],
        productData: [
            { name: "BK29", url: "https://www.polarissemiconductor.com/bk29" },
            { name: "BK30", url: "https://www.polarissemiconductor.com/bk30" },
            { name: "BK19", url: "https://www.polarissemiconductor.com/bk19" },
            { name: "BT29", url: "https://www.polarissemiconductor.com/bt29" }
        ],
        pdfUrl: "https://www.polarissemiconductor.com/s/PolarisWhitepaper_PSWP001_June2025.pdf"
    },
    {
        id: 7,
        slug: "bk-prod-tab",
        title: "Polaris Buck Regulators: Full Product Table",
        excerpt: "An up-to-date listing of all Polaris Semiconductor DC step-down voltage regulator products, along with relevant figures of merit for comparison purposes...",
        abstract: "An up-to-date listing of all Polaris Semiconductor DC step-down voltage regulator products, along with relevant figures of merit for comparison purposes. For more detailed information, please review the Product Family Spotlight documents or get in touch with us for access to our full product datasheets.",
        date: "June 11, 2025",
        type: "technology-overview",
        typeLabel: "Technology Overview",
        products: ["BK29", "BK30", "BK19"],
        productData: [
            { name: "BK29", url: "https://www.polarissemiconductor.com/bk29" },
            { name: "BK30", url: "https://www.polarissemiconductor.com/bk30" },
            { name: "BK19", url: "https://www.polarissemiconductor.com/bk19" }
        ],
        pdfUrl: "https://www.polarissemiconductor.com/s/PolarisWhitepaper_PSWP001_June2025.pdf"
    }
];
