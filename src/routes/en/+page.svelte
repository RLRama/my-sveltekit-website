<svelte:head>
    <title>Ramiro Ignacio Rios Lopez: personal website and portfolio</title>
    <meta name="robots" content="noindex nofollow"/>
    <meta name="description" content="Ramiro Ignacio Rios Lopez (RLRI)'s personal website, also used as a portfolio.">
    <html lang="en" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</svelte:head>

<script lang="ts">
    import logo from '$lib/assets/favicon.png';
    import {Card, Col, Container, Row} from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";

    let projects = [];

    onMount(async () => {
        const res = await fetch('/api/projects');
        projects = await res.json();
    });
</script>

<script lang="ts" context="module">

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
        <Row class="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Col>
                <Card class="shadow-sm">
                    
                </Card>
            </Col>
        </Row>
    </Container>

    <div class="container">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #43484b;"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #dddad6;">Thumbnail</text></svg>
                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small class="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #43484b;"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #dddad6;">Thumbnail</text></svg>
                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small class="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #43484b;"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #dddad6;">Thumbnail</text></svg>
                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small class="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #43484b;"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #dddad6;">Thumbnail</text></svg>
                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small class="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #43484b;"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #dddad6;">Thumbnail</text></svg>
                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small class="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #43484b;"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #dddad6;">Thumbnail</text></svg>
                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small class="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #43484b;"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #dddad6;">Thumbnail</text></svg>
                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small class="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #43484b;"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #dddad6;">Thumbnail</text></svg>
                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small class="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #43484b;"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #dddad6;">Thumbnail</text></svg>
                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small class="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Container>