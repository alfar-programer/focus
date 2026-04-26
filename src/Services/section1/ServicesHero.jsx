import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesHero.css';
import { useI18n } from '../../i18n/I18nProvider';

const ServicesHero = () => {
    const { t } = useI18n();

    return (
        <section className="services-hero">
            <div className="services-hero__overlay"></div>
            
            <div className="services-hero__container">
                <div className="services-hero__content">
                    {/* CTA Buttons - The text is already in the background image */}
                    <div className="services-hero__cta">
                        <Link to="/contact" className="services-hero__btn services-hero__btn--primary">
                            <span>{t('services.hero.ctaPrimary')}</span>
                            <span className="services-hero__btn-icon">→</span>
                        </Link>
                        <Link to="/projects" className="services-hero__btn services-hero__btn--secondary">
                            {t('services.hero.ctaSecondary')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
