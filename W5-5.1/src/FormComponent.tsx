import { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [savedName, setSavedName] = useState('');
  const [savedEmail, setSavedEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedName(name);
    setSavedEmail(email);
    alert(`ชื่อ: ${name}\nอีเมล: ${email}`);
  };

  const handleClear = () => {
    setName('');
    setEmail('');
    setSavedName('');
    setSavedEmail('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>User Form Exercise - Solution</h2>

      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <p>ชื่อ:{name}</p>
          <input
            type="text"
            placeholder="กรอกชื่อของคุณ"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
           <p>ชื่อ:{email}</p>
          <input
            type="email"
            placeholder="กรอกอีเมลของคุณ"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div>
          <button
            type="submit"
            style={{ background: 'green', color: 'white', padding: '8px 16px', marginRight: '10px', border: 'none', borderRadius: '4px' }}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            style={{ background: 'red', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px' }}
          >
            Clear
          </button>
        </div>
      </form>

      <div style={{ background: '#000000ff', padding: '15px', marginTop: '20px', textAlign: 'left' }}>
        <h4>ข้อมูลปัจจุบัน:</h4>
        <p>ชื่อ: {savedName || 'ยังไม่ได้กรอก'}</p>
        <p>อีเมล: {savedEmail || 'ยังไม่ได้กรอก'}</p>
      </div>
    </div>
  );
}

export default UserForm;
