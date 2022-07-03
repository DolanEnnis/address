<script>
	import { auth, googleProvider } from '../$lib/components/firebase';
	import { signInWithPopup } from 'firebase/auth';
	import { user, isLoggedIn } from '../$lib/store/userStore';
	import { goto } from '$app/navigation';

	const login = async () => {
		try {
			const res = await signInWithPopup(auth, googleProvider);
			$user = res.user;
			$isLoggedIn = true;
			goto('/');
		} catch (err) {
			console.error(err);
		}
	};
</script>

<div class="flex flex-col items-center">
	<h1 class="m-4">Login</h1>

	<button
		class="shadow-sm rounded bg-gray-200 hover:text-white py-2 px-4 hover:bg-gray-600"
		on:click={login}>Login using Google</button
	>
</div>
