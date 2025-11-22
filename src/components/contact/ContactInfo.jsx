import React from 'react';
import siteConfig from '../../data/siteConfig.json';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="heading-3 text-xl mb-4">Get in Touch</h3>
        <p className="text-neutral-600 leading-relaxed">
          We'd love to hear about your project. Whether you're looking to build your dream
          home or develop a commercial space, our team is here to help bring your vision to life.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="font-semibold mb-2">Email</h4>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            {siteConfig.contact.email}
          </a>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Phone</h4>
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            {siteConfig.contact.phone}
          </a>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Address</h4>
          <p className="text-neutral-600">
            {siteConfig.contact.address}
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            {Object.entries(siteConfig.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 transition-colors capitalize"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;