<script context="module">
    export { default as layout } from "../../Layouts/AuthenticatedLayout.svelte";
</script>

<script>
    import InputLabel from "../../Components/InputLabel.svelte";
    import TextInput from "../../Components/TextInput.svelte";
    import InputError from "../../Components/InputError.svelte";
    import PrimaryButton from "../../Components/PrimaryButton.svelte";
    import { useForm } from "@inertiajs/svelte";

    export let email, token;

    const form = useForm({
        token: props.token,
        email: props.email,
        password: "",
        password_confirmation: "",
    });

    const submit = () => {
        $form.post(route("password.store"), {
            onFinish: () => $form.reset("password", "password_confirmation"),
        });
    };
</script>

<svelte:head>
    <title>Reset Password</title>
</svelte:head>

<form on:submit|preventDefault={submit}>
    <div>
        <InputLabel for="email" value="Email" />

        <TextInput
            id="email"
            type="email"
            class="mt-1 block w-full"
            v-model="form.email"
            required
            autofocus
            autocomplete="username"
        />

        <InputError class="mt-2" message={$form.errors.email} />
    </div>

    <div class="mt-4">
        <InputLabel for="password" value="Password" />

        <TextInput
            id="password"
            type="password"
            class="mt-1 block w-full"
            v-model="form.password"
            required
            autocomplete="new-password"
        />

        <InputError class="mt-2" message={$form.errors.password} />
    </div>

    <div class="mt-4">
        <InputLabel for="password_confirmation" value="Confirm Password" />

        <TextInput
            id="password_confirmation"
            type="password"
            class="mt-1 block w-full"
            v-model="form.password_confirmation"
            required
            autocomplete="new-password"
        />

        <InputError class="mt-2" message={$form.errors.password_confirmation} />
    </div>

    <div class="flex items-center justify-end mt-4">
        <PrimaryButton
            class={$form.processing ? "opacity-25" : ""}
            disabled={$form.processing}
        >
            Reset Password
        </PrimaryButton>
    </div>
</form>
