export default function PrivacyPage() {
  return (
    <div className="container-fluid py-16 prose prose-invert max-w-3xl">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      <p>PulseTrack values your privacy. This policy describes how we collect, use, and protect your information.</p>
      <h2>Information we collect</h2>
      <ul>
        <li>Account information such as name and email address</li>
        <li>Usage data including pages visited and actions taken</li>
        <li>Social platform metrics you authorize us to access</li>
      </ul>
      <h2>How we use information</h2>
      <ul>
        <li>Provide and improve the service</li>
        <li>Communicate important updates</li>
        <li>Analyze usage patterns to enhance experience</li>
      </ul>
      <h2>Data retention</h2>
      <p>We retain data only as long as necessary to provide the service or as required by law.</p>
      <h2>Contact</h2>
      <p>For any questions, contact privacy@pulsetrack.app.</p>
    </div>
  );
}