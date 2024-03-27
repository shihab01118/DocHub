const GoogleMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1824.2773574701457!2d90.38921978832488!3d23.869940797439796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755c5e1a55f89ff%3A0x4aec40d26fd896fa!2sLubana%20General%20Hospital%20%26%20Cardiac%20Center%2C%2009%20Gareeb-e-Nawaz%20Ave%2C%20Dhaka%201230!3m2!1d23.870444!2d90.3906765!5e0!3m2!1sen!2sbd!4v1711551170807!5m2!1sen!2sbd"
        width="100%"
        height="350"
        allowFullScreen
        loading="lazy"
        title="Google Map"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-none"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
