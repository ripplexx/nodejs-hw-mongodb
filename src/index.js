import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';
import dotenv from 'dotenv';

dotenv.config();

const bootstrap = async () => {
  // Önce veritabanı bağlantısını bekle
  await initMongoConnection();
  // Bağlantı başarılı olursa sunucuyu başlat
  setupServer();
};

bootstrap();