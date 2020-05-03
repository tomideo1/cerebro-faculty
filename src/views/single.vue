<template>
    <div>
        <div class='columns'>
            <div class='container profile'>
                <div class='section profile-heading'>
                    <div class='columns is-mobile is-multiline'>
                        <div class='column is-2'>
                          <span class='header-icon user-profile-image'>
                            <img alt='' :src='items.image'>
                          </span>
                        </div>
                        <div class='column is-4-tablet is-10-mobile name'>
                            <p>
                                <span class='title is-bold'>
                                    {{items.firstname + ' ' +  items.lastname}}
                                </span>
                                <br>
                                <a class='button is-primary is-outlined' href='#' id='edit-preferences' style='margin: 5px 0'>
                                    {{items.role}}
                                </a>
                                <br>
                            </p>
                            <p class='tagline' v-html="items.about">
                                {{items.about}}
                            </p>
                        </div>
                        <div class='column is-2-tablet is-4-mobile has-text-centered'>
                            <p class='stat-val'> {{items.faculty_id}}</p>
                            <p class='stat-key'>
                                Faculty ID
                            </p>
                        </div>
                    </div>
                </div>
                <div class='columns is-mobile'>
                    <div class='column is-3-tablet is-6-mobile'>
                        <div class='card'>
                            <div class='card-image'>
                                <figure class='image is-4by3'>
                                    <img alt='' src='http://placehold.it/300x225'>
                                </figure>
                            </div>
                            <div class='card-content'>
                                <div class='content'>
                                    <span class='tag is-dark subtitle'>#1</span>
                                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking in and clicking out of text area) - these are unique to the user - they will show up as part of a saved listings' info here - but adding notes to a property does not automatically create a saved listing. Likewise, removing this proeprty from saved listings does not auto remove the notes.</p>
                                </div>
                            </div>
                            <footer class='card-footer'>
                                <a class='card-footer-item'>Compare</a>
                                <a class='card-footer-item'>Share</a>
                                <a class='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                        <br>
                    </div>
                    <div class='column is-3-tablet is-6-mobile'>
                        <div class='card'>
                            <div class='card-image'>
                                <figure class='image is-4by3'>
                                    <img alt='' src='http://placehold.it/300x225'>
                                </figure>
                            </div>
                            <div class='card-content'>
                                <div class='content'>
                                    <span class='tag is-dark subtitle'>#2</span>
                                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking in and clicking out of text area) - these are unique to the user - they will show up as part of a saved listings' info here - but adding notes to a property does not automatically create a saved listing. Likewise, removing this proeprty from saved listings does not auto remove the notes.</p>
                                </div>
                            </div>
                            <footer class='card-footer'>
                                <a class='card-footer-item'>Compare</a>
                                <a class='card-footer-item'>Share</a>
                                <a class='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                        <br>
                    </div>
                    <div class='column is-3'>
                        <div class='card'>
                            <div class='card-image'>
                                <figure class='image is-4by3'>
                                    <img alt='' src='http://placehold.it/300x225'>
                                </figure>
                            </div>
                            <div class='card-content'>
                                <div class='content'>
                                    <span class='tag is-dark subtitle'>#3</span>
                                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking in and clicking out of text area) - these are unique to the user - they will show up as part of a saved listings' info here - but adding notes to a property does not automatically create a saved listing. Likewise, removing this proeprty from saved listings does not auto remove the notes.</p>
                                </div>
                            </div>
                            <footer class='card-footer'>
                                <a class='card-footer-item'>Compare</a>
                                <a class='card-footer-item'>Share</a>
                                <a class='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                        <br>
                    </div>
                    <div class='column is-3'>
                        <div class='card'>
                            <div class='card-image'>
                                <figure class='image is-4by3'>
                                    <img alt='' src='http://placehold.it/300x225'>
                                </figure>
                            </div>
                            <div class='card-content'>
                                <div class='content'>
                                    <span class='tag is-dark subtitle'>#4</span>
                                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking in and clicking out of text area) - these are unique to the user - they will show up as part of a saved listings' info here - but adding notes to a property does not automatically create a saved listing. Likewise, removing this proeprty from saved listings does not auto remove the notes.</p>
                                </div>
                            </div>
                            <footer class='card-footer'>
                                <a class='card-footer-item'>Compare</a>
                                <a class='card-footer-item'>Share</a>
                                <a class='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                        <br>
                    </div>
                </div>
                <div class='columns is-mobile'>
                    <div class='column is-3'>
                        <div class='card'>
                            <div class='card-image'>
                                <figure class='image is-4by3'>
                                    <img alt='' src='http://placehold.it/300x225'>
                                </figure>
                            </div>
                            <div class='card-content'>
                                <div class='content'>
                                    <span class='tag is-dark subtitle'>#5</span>
                                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking in and clicking out of text area) - these are unique to the user - they will show up as part of a saved listings' info here - but adding notes to a property does not automatically create a saved listing. Likewise, removing this proeprty from saved listings does not auto remove the notes.</p>
                                </div>
                            </div>
                            <footer class='card-footer'>
                                <a class='card-footer-item'>Compare</a>
                                <a class='card-footer-item'>Share</a>
                                <a class='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                        <br>
                    </div>
                    <div class='column is-3'>
                        <div class='card'>
                            <div class='card-image'>
                                <figure class='image is-4by3'>
                                    <img alt='' src='http://placehold.it/300x225'>
                                </figure>
                            </div>
                            <div class='card-content'>
                                <div class='content'>
                                    <span class='tag is-dark subtitle'>#6</span>
                                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking in and clicking out of text area) - these are unique to the user - they will show up as part of a saved listings' info here - but adding notes to a property does not automatically create a saved listing. Likewise, removing this proeprty from saved listings does not auto remove the notes.</p>
                                </div>
                            </div>
                            <footer class='card-footer'>
                                <a class='card-footer-item'>Compare</a>
                                <a class='card-footer-item'>Share</a>
                                <a class='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                        <br>
                    </div>
                    <div class='column is-3'>
                        <div class='card'>
                            <div class='card-image'>
                                <figure class='image is-4by3'>
                                    <img alt='' src='http://placehold.it/300x225'>
                                </figure>
                            </div>
                            <div class='card-content'>
                                <div class='content'>
                                    <span class='tag is-dark subtitle'>#7</span>
                                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking in and clicking out of text area) - these are unique to the user - they will show up as part of a saved listings' info here - but adding notes to a property does not automatically create a saved listing. Likewise, removing this proeprty from saved listings does not auto remove the notes.</p>
                                </div>
                            </div>
                            <footer class='card-footer'>
                                <a class='card-footer-item'>Compare</a>
                                <a class='card-footer-item'>Share</a>
                                <a class='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                        <br>
                    </div>
                    <div class='column is-3'>
                        <div class='card'>
                            <div class='card-image'>
                                <figure class='image is-4by3'>
                                    <img alt='' src='http://placehold.it/300x225'>
                                </figure>
                            </div>
                            <div class='card-content'>
                                <div class='content'>
                                    <span class='tag is-dark subtitle'>#8</span>
                                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking in and clicking out of text area) - these are unique to the user - they will show up as part of a saved listings' info here - but adding notes to a property does not automatically create a saved listing. Likewise, removing this proeprty from saved listings does not auto remove the notes.</p>
                                </div>
                            </div>
                            <footer class='card-footer'>
                                <a class='card-footer-item'>Compare</a>
                                <a class='card-footer-item'>Share</a>
                                <a class='card-footer-item'>Delete</a>
                            </footer>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        name: "single",
        props: ["items"],
        mounted() {
        }
    }
</script>

<style scoped>
    body {
        background: #F5F7FA
    }

    .stat-val {
        font-size: 3em;
        padding-top: 20px;
        font-weight: bold;
    }

    .stat-key {
        font-size: 1.4em;
        font-weight: 200
    }

    .section.profile-heading .column.is-2-tablet.has-text-centered + .has-text-centered {
        border-left: 1px dotted rgba(0, 0, 0, .2);
    }

    .container.profile {
        margin-top: 1%;
    }

    .control.is-pulled-left span.select {
        margin-right: 5px;
        border-radius: 2px;
    }

    .modal-card .content h1 {
        padding: 40px 10px 10px;
        border-bottom: 1px solid #dadada
    }

    .container.profile .profile-options .tabs ul li.link a {
        margin-bottom: 20px;
        padding: 20px;
        background-color: #F1F1F1;
    }
</style>