import { FormField, SocialMediaLink } from '@app/types/helper';
import { Images } from '@assets/images';
import i18n from '@core/configs/i18n.config';

export const socialMediaLinks: SocialMediaLink[] = [
  { platform: 'Facebook', icon: <Images.FaFacebook />, link: '/' },
  { platform: 'XTwitter', icon: <Images.FaXTwitter />, link: '/' },
  { platform: 'Google', icon: <Images.FaGoogle />, link: '/' },
];

export const formFieldsRegister: FormField[] = [
  { name: 'username', placeholder: i18n.t('register.username'), type: 'text' },
  { name: 'email', placeholder: i18n.t('register.email'), type: 'text' },
  { name: 'phone', placeholder: i18n.t('register.phone'), type: 'text' },
  { name: 'password', placeholder: i18n.t('register.password'), type: 'password' },
  { name: 'confirmPassword', placeholder: i18n.t('register.confirmPassword'), type: 'password' },
];

export const formFieldsForgotPassword: FormField[] = [
  { name: 'email', placeholder: i18n.t('register.email'), type: 'text' },
];
