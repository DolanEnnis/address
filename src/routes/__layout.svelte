<script>
	import '../app.css';
	import { auth } from '../$lib/components/firebase';
	import { user, isLoggedIn } from '../$lib/store/userStore';
	import { goto } from '$app/navigation';
	import Index from './index.svelte';

	const logout = async () => {
		try {
			const res = await auth.signOut();
			$user = {};
			$isLoggedIn = false;
			goto('/login');
		} catch (err) {
			console.error(err);
		}
	};
</script>

<nav class="noprint w-full grid grid-cols-2 py-4 bg-blue-600 shadow-lg">
	<p>Can Put Logo here</p>
	<ul class="flex justify-end">
		<li
			class="mr-6 text-blue-100
			hover:text-black"
		>
			<a href="/">Home</a>
		</li>
		{#if $isLoggedIn}
			<li
				class="mr-6 text-blue-100
			hover:text-black"
			>
				<a href="/profile">Profile</a>
			</li>
			<li
				class="mr-6 text-blue-100
			hover:text-black"
			>
				<a href="/" on:click={logout}>Logout</a>
			</li>
		{:else}
			<li
				class="mr-6 text-blue-100
			hover:text-black"
			>
				<a href="/login">Login</a>
			</li>
		{/if}
	</ul>
</nav>

<div class="container mx-auto my-6 max-w-lg bg-blue-100 ">
	<slot />
</div>

<div
	class="footer flex justify-evenly noprint w-full text-white py-4 text-xs bg-blue-600 shadow-lg rounded-full"
>
	<div>
		{#if $isLoggedIn}
			Logged in as {$user.displayName}
		{:else}
			Please Log In!
		{/if}
	</div>
	<div>Brian Dolan June 2022 (beta 0.0.01)</div>
</div>

<style>
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
	}
	@media print {
		.noprint {
			visibility: hidden;
		}
	}
</style>
