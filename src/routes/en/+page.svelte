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
        Button, ButtonGroup,
        Card,
        CardBody,
        CardFooter,
        CardSubtitle,
        Col,
        Container, Icon, ListGroup, ListGroupItem,
        Row
    } from "@sveltestrap/sveltestrap";
    import projects from '../../lib/assets/projects_en.json';
    import personalData from '../../lib/assets/personalData.json';
    import workExperience from '../../lib/assets/workExperience.json';
    import {onMount} from "svelte";

    const {
        name,
        invertedName,
        mailAddress,
        linkedin,
        githubLink,
        gitlabLink,
        efSetCertificate
    } = personalData[0];

    const currentYear: number = new Date().getFullYear();

</script>

<Container id="globalContainer">
    <Container id="heroSection" class="px-4 py-5 my-5 text-center">
        <img id="logo" class="rounded mx-auto d-block mb-4" src={logo} alt="My logo" width="200"/>
        <h1 class="display-5 text-body-emphasis">{name}</h1>
        <Col class="col-log-6 mx-auto">
            <p class="lead mb-4">Information Engineering Systems student. Junior developer.</p>
        </Col>
    </Container>

    <Container id="projectsSection" class="my-5">
        <h2 class="text-center text-body-emphasis my-3">Projects</h2>
        <hr>
        <Row class="row-cols-1 g-4 py-5" cols={{ lg: 3, md: 3, sm: 2}}>
            {#each projects as project}
                <Col>
                    <Card class="shadow-sm h-100">
                        <img class="card-img-top" src={project.imageLink} alt={project.name}>
                        <CardBody>
                            <h6>{project.name}</h6>
                            <CardSubtitle class="fw-normal my-auto text-body-secondary">{project.description}</CardSubtitle>
                            <p class="mt-1">{project.techsDescription}</p>
                        </CardBody>
                        <CardFooter>
                            <ButtonGroup>
                                <Button outline color="primary" href={project.repositoryLink} target="_blank">Code</Button>
                                <Button outline color="primary"href={project.websiteLink} target="_blank">Live demo</Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </Col>
            {/each}
        </Row>
    <p class="text-center">Check my most recent work on <a href={githubLink} target="_blank"><Icon name="github"/> GitHub</a> and <a href={gitlabLink} target="_blank"><Icon name="gitlab"/> GitLab</a></p>
    </Container>

    <Container id="aboutMeSection" class="text-center my-5">
        <h2 class="text-center text-body-emphasis my-3">About me</h2>
        <hr>
        <p class="text-center">I am a junior developer, based in La Rioja, Argentina. I like to follow clean coding conventions and best developer practices. When I'm not programming -or doing related stuff-, I enjoy weightlifting and playing video games. I speak native spanish and <a href={efSetCertificate} target="_blank">"fluent" english</a>.</p>
        <p class="text-center">Download my resume</p>
        <ButtonGroup>
            <Button outline color="primary" href=# target="_blank"><Icon name="file-earmark-word" /> DOCX</Button>
            <Button outline color="primary" href=# target="_blank"><Icon name="file-earmark-pdf" /> PDF</Button>
        </ButtonGroup>
    </Container>

    <Container id="experienceSection" class="my-5">
        <h2 class="text-center text-body-emphasis my-3">Experience</h2>
        <hr>
        <Row class="g-4 py-5 row-cols-1" cols={{ lg: 2 }}>
            {#each workExperience as job}
                <Col>
                    <h3 class="fs-2 text-body-emphasis">{job.company}</h3>
                    <h4 class="text-dark-emphasis">{job.position}</h4>
                    <h5 class="text-light-emphasis">{job.period}</h5>
                    <ListGroup>
                        {#each job.tasks as task}
                            <ListGroupItem>{task}</ListGroupItem>
                        {/each}
                    </ListGroup>
                </Col>
            {/each}
        </Row>
    </Container>
</Container>