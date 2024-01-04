<script>
    import {Container, Image} from "@sveltestrap/sveltestrap";
    import logo from '$lib/assets/favicon.png';
</script>

<style>
    p {
        text-align: center;
    }
    
    .modal {
        margin-top: 30px;
    }
</style>

<Container class="modal" fluid>
    <Image width="200" height="200" src={logo} alt="My logo"/>
</Container>