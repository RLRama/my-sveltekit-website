<svelte:head>
    <title>Ramiro Ignacio Rios Lopez</title>
    <meta name="robots" content="noindex nofollow"/>
    <html lang="en" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</svelte:head>

<script lang="ts">
    import logo from '$lib/assets/favicon.png';
    import {Col, Container, Row} from "@sveltestrap/sveltestrap";

</script>

<img id="logo" alt="My logo" class="text-center d-block" src={logo} width="200"/>


<Container id="global-container">


    <Container id="heroSection">
    </Container>

    <Container id="projectsSection">

    </Container>
</Container>

<style>

    #logo {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
</style>