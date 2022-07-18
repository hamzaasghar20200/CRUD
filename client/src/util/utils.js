import { toast } from 'react-toastify';

export const showToast = (msg, type) => {
	switch (type) {
		case 'success':
			toast.success(msg) ;
			break;
		case 'info':
			toast.info(msg);
			break;
		case 'error':
			toast.error(msg);
			break;
		default:
			toast.info(msg);
	}
};