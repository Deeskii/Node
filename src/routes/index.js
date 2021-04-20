import express from 'express';
// eslint-disable-next-line import/named
import { indexPage } from '../controllers';
import { messagesPage, addMessage } from '../controllers/messages';
import { modifyMessage, performAsyncAction  } from '../middleware';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', addMessage);
indexRouter.post('/messages', modifyMessage, addMessage, performAsyncAction );
export default indexRouter;
