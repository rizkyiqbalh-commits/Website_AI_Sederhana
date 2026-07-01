import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000
# Tentukan direktori tempat file web disimpan
DIRECTORY = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'web')

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        # Gunakan parameter directory untuk melayani file dari folder 'web' tanpa memindahkan Cwd python
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def main():
    print("=" * 65)
    print("      SERVER SISTEM PAKAR KELAYAKAN PENDAKIAN (UI/UX)      ")
    print("=" * 65)
    print(f"Direktori Web Aset : {DIRECTORY}")
    
    # Pastikan file index.html ada di tempatnya
    if not os.path.exists(os.path.join(DIRECTORY, 'index.html')):
        print(f"Error: Tidak dapat menemukan file index.html di folder: {DIRECTORY}")
        sys.exit(1)
        
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
            url = f"http://localhost:{PORT}/"
            print(f"\n[+] Server berhasil berjalan di: {url}")
            print("[+] Membuka browser otomatis...")
            webbrowser.open(url)
            print("[!] Tekan Ctrl+C untuk menghentikan server.\n")
            httpd.serve_forever()
    except PermissionError:
        print(f"Error: Port {PORT} tidak diizinkan. Coba jalankan sebagai Administrator.")
    except OSError:
        print(f"Error: Port {PORT} sudah digunakan oleh aplikasi lain. Silakan tutup aplikasi tersebut atau ubah variabel PORT.")
    except KeyboardInterrupt:
        print("\n[+] Server dihentikan oleh pengguna.")

if __name__ == '__main__':
    main()
