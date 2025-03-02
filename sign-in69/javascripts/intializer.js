import { authActionChecker } from './auth/action-shecker.js';
import { authServerDb } from './auth/auth-server.js';

authActionChecker();
authServerDb();