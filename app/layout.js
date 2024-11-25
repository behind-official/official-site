import './css/reset.css'

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
        <body className='sec_project_wrap'>
            {children}
        </body>
    </html>
  );
}
