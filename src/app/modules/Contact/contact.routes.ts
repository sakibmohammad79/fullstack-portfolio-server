import { Router } from 'express';
import { createContactSchema } from './contact.validation';
import { ContactController } from './contact.controller';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/authGurd';
import { UserRole } from '@prisma/client';


const router = Router();

// Public route - for contact form submission
router.post(
  '/',
  validateRequest(createContactSchema),
  ContactController.createContact
);


router.get(
  '/',
auth(UserRole.ADMIN),
  ContactController.getContacts
);

router.get(
  '/stats',
  ContactController.getContactStats
);

router.get(
  '/:id',
  ContactController.getContactById
);

router.delete(
  '/:id',
  ContactController.deleteContact
);

export const contactMessageRoutes = router;