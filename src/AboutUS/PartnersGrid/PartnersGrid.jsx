import React, { useState } from "react";
import "./PartnersGrid.css";
import { useI18n } from "../../i18n/I18nProvider";

const egyptPartners = [
  { src: "/partners/partner1.png", region: "egypt" },
  { src: "/partners/partner2.png", region: "egypt" },
  { src: "/partners/partner3.png", region: "egypt" },
  { src: "/partners/partner4.png", region: "ksa" },
];

const ksaPartners = [
  { src: "/EGcodera-removebg-preview.png", region: "egypt" },
  { src: "/logonobackground.png", region: "ksa" },
  { src: "/partners/partner1.png", region: "egypt" },
];

const PartnersGrid = () => {
  const { get, t } = useI18n();
  const [activeRegion, setActiveRegion] = useState("egypt");
  const features = get("about.partners.features", []);

  const currentPartners =
    activeRegion === "egypt" ? egyptPartners : ksaPartners;

  return (
    <section className="partners-grid-section">
      <div className="partners-grid-background" />

      <div className="partners-grid-container">
        {/* Header */}
        <div className="partners-grid-header">
          <h1 className="partners-grid-title">
            {t("about.partners.titleStart")}
            <span className="partners-highlight">
              {t("about.partners.titleHighlight")}
            </span>
          </h1>
          <p className="partners-grid-subtitle">
            {t("about.partners.subtitle")}
          </p>

          {/* Region Tabs */}
          <div className="partners-region-tabs">
            <button
              className={`partners-tab ${activeRegion === "ksa" ? "partners-tab-active" : ""}`}
              onClick={() => setActiveRegion("ksa")}
            >
              {t("about.partners.tabs.customers")}
            </button>
            <button
              className={`partners-tab ${activeRegion === "egypt" ? "partners-tab-active" : ""}`}
              onClick={() => setActiveRegion("egypt")}
            >
              {t("about.partners.tabs.partners")}
            </button>
          </div>
        </div>

        {/* Marquee Logos */}
        <div className="partners-marquee-wrapper" key={activeRegion}>
          <div className="partners-marquee">
            <div className="partners-marquee-track">
              {[...currentPartners, ...currentPartners].map((partner, index) => (
                <div key={index} className="partner-logo-container">
                  <img
                    src={partner.src}
                    alt={`Partner ${(index % 8) + 1}`}
                    className="partner-logo"
                  />
                  <div className="partner-region-indicator">
                    <span className="region-bullet"></span>
                    <span className="region-name">
                      {t(`about.partners.regions.${partner.region}`)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="partners-features-grid">
          {features.map((feature, index) => (
            <div key={index} className="partners-feature-card">
              <div className="partners-feature-header">
                <span className="partners-feature-icon material-symbols-outlined">
                  {feature.icon}
                </span>
                <h3 className="partners-feature-title">{feature.title}</h3>
              </div>
              <p className="partners-feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="partners-grid-footer">
          <div className="partners-footer-line" />
          <p className="partners-footer-text">{t("about.partners.footer")}</p>
        </div>
      </div>
    </section>
  );
};

export default PartnersGrid;
