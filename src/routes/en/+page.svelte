<svelte:head>
    <title>Ramiro Ignacio Rios Lopez: personal website and portfolio</title>
    <meta name="robots" content="noindex nofollow"/>
    <meta name="description" content="Ramiro Ignacio Rios Lopez (RLRI)'s personal website, also used as a portfolio.">
    <html lang="en" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</svelte:head>

<script lang="ts">
    import logo from '$lib/assets/favicon.png';
    import {
        Button,
        Card,
        CardBody,
        CardFooter,
        CardSubtitle,
        CardText,
        Col,
        Container, Modal,
        Row
    } from "@sveltestrap/sveltestrap";
    import projects from '../../lib/assets/projects_en.json';

    let open = false;

    const toggle = () => (open = !open);

</script>

<Container id="globalContainer">

    <Container id="heroSection" class="px-4 py-5 my-5 text-center">
        <img id="logo" class="rounded mx-auto d-block mb-4" src={logo} alt="My logo" width="200"/>
        <h1 class="display-5 text-body-emphasis">Ramiro Ignacio Rios Lopez</h1>
        <Col class="col-log-6 mx-auto">
            <p class="lead mb-4">Information Engineering Systems student. Junior developer.</p>
        </Col>
    </Container>


    <Container id="projectsSection">
        <h2 class="text-center text-body-emphasis">Projects</h2>
        <hr>
        <Row class="row-cols-1 g-4 py-5" cols={{ lg: 3, md: 3, sm: 2}}>
            {#each projects as project}
                <Col>
                    <Card class="shadow-sm h-100">
                        <img class="card-img-top" src={project.imageLink} alt={project.name}>
                        <CardBody>
                            <h6>{project.name}</h6>
                            <CardSubtitle class="fw-medium my-auto text-body-secondary">{project.shortDescription}</CardSubtitle>
                        </CardBody>
                        <CardFooter>
                            <CardText>{project.techsOverview}</CardText>
                            <Button outline color="primary" on:click={toggle}>See more</Button>
                        </CardFooter>
                    </Card>
                </Col>
            {/each}
        </Row>
    </Container>
</Container>