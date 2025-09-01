import React from 'react';
import './CertificationsSection.css';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'UMF',
      description: 'The UMF Grading system appraises natural markers found in manuka honey and assures purity and quality.',
      image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/Oh6d8GpAuT.png'
    },
    {
      title: 'Non-GMO',
      description: 'Our honey is certified and in compliance with the Non-GMO Project Standard.',
      image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/qPirXKMs9i.png'
    },
    {
      title: 'Glyphosate free',
      description: 'Every batch of our honey is tested in independent laboratories to ensure it is glyphosate free.',
      image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/WCnaO4wABK.png'
    },
    {
      title: 'Halal',
      description: 'Certified by FIANZ, The Federation of Islamic Associations of New Zealand (Inc).',
      image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/uzif87YPyc.png'
    },
    {
      title: 'Fernmark',
      description: 'We are Fernmark accredited and approved by the NZ Government as a trusted exporter.',
      image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/gQTjXn2q6s.png'
    },
    {
      title: 'MGO Certified',
      description: 'Our independent certification shows you the exact MGO levels in our manuka honey',
      image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-30/dXsAdhPvYn.png'
    }
  ];

  return (
    <section className="certifications-section">
      <h2 className="section-title">Credentials</h2>
      
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-image-wrapper">
              <img src={cert.image} alt={cert.title} className="cert-image" />
            </div>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-description">{cert.description}</p>
          </div>
        ))}
      </div>
      
      <div className="button-wrapper">
        <button className="more-button">
          Find out more
        </button>
      </div>
    </section>
  );
}

export default CertificationsSection;
