@@ .. @@
 import type { AppProps } from 'next/app';
 import '../src/index.css';
+import Header from '../src/components/Header';
+import Footer from '../src/components/Footer';

 export default function App({ Component, pageProps }: AppProps) {
   return (
-    <Component {...pageProps} />
+    <div className="min-h-screen bg-white">
+      <Header />
+      <Component {...pageProps} />
+      <Footer />
+    </div>
   );
 }