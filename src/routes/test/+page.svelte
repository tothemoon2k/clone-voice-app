<script>
    // @ts-nocheck
    import { onMount } from "svelte";

    onMount(()=>{
        if (localStorage.getItem('dark-mode') === 'false' || !('dark-mode' in localStorage)) {
            document.querySelector('html').classList.remove('dark');
        } else {
            document.querySelector('html').classList.add('dark');
        }
    })
</script>

<body class="cj90m c7e3b cisrt c7wkd c2gcs ce7fn clmvh">

    <!-- Page wrapper -->
    <div class="cbvui chs6j c8gx0 ckwv3 cjycj cezsk">

        <!-- Bg coloured shapes -->
        <div class="cwysf cs1uv cojlt c9v7h cvhgl cr8aa cetkn cag0k" aria-hidden="true">
            <div class="c5bik c9b4s c0oy8 cmix3 cj04y ckrsz cje3v csstg cevtx cv8gl cyy6y cr8aa c98s8 c3yb8"></div>
            <div class="cfwzm chupg c9b4s c0oy8 cmix3 cj04y ckrsz csstg c8m5q cevtx cv8gl cyy6y cr8aa cjgsx cnbs3 c3yb8"></div>
            <div class="csla3 chupg c9b4s c0oy8 cmix3 cj04y ckrsz csstg c8m5q cevtx cv8gl cyy6y cr8aa c110f c9hsq cggi5"></div>
            <div class="cs09d czbwe cd03c c9b4s c0oy8 cmix3 cj04y ckrsz csstg cevtx cv8gl cc2fz cyy6y cr8aa c8zmq cwoae"></div>
            <div class="cpxaw crjok c9b4s c0oy8 cmix3 cj04y ckrsz csstg c8m5q cevtx cv8gl cpsm9 cgtcx cc1h8 cr8aa c2svq"></div>
            <div class="c55mv cpvgd c9b4s c0oy8 cmix3 cj04y ckrsz csstg c8m5q cevtx cv8gl cc2fz cyy6y cr8aa cubdc cggi5"></div>
        </div>

        <!-- Vertical lines -->
        <div class="cwysf cs1uv cojlt c9v7h cvhgl cr8aa cag0k" aria-hidden="true">
            <!-- Left side -->
            <div class="c9dpd c30rf crc45 c06dl cd91y czb12 c2wd7 cd8xp cpue7 cevtx ch88u cr5hf cxgoq c6ppr cjkk2 chsmj"></div>
            <!-- Right side -->
            <div class="c9dpd c30rf crc45 c06dl cd91y czb12 c2wd7 cd8xp cpue7 cevtx ch88u cr5hf cvq9r cxgoq cj85p c6ppr"></div>            
        </div>

        <!-- Site header -->
        <header class="c9v3y crbyi c7hiy cvq6c cd5ux cr8aa cligc ctdcn coe0p crj7h c2dja casec">
            <div class="cy6zq crh5c">
                <div class="cpthp czrhe">
                    <div class="cvvig cba0k c04cg c45gv c5plh chwso cfctz ccjiw ckwv3 ckqfb cf0cr cezsk c2svq c02c5">

                        <!-- Border with dots in corners -->
                        <div class="ch4rd cetk9 couhs c53q4 cehp5 chqy8 cukhb cx8c7 cippd crgvw c2z22 cv89o cr2ij cpue7 crc6r cevtx cr5hf cxgoq cjkk2 c1qs0 ckoug cpnw7 cr8aa cag0k" aria-hidden="true"></div>
            
                        <!-- Site branding -->
                        <div class="ctuhr">
                            <!-- Logo -->
                            <a href="https://preview.cruip.com/waitlist/index.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                    <path class="c6qeh" d="M16.975 3.036c6.402.475 11.514 5.586 11.99 11.989H24.32a7.345 7.345 0 0 1-7.345-7.345V3.036Zm-1.95 21.284v4.644c-6.402-.475-11.514-5.587-11.989-11.99H7.68a7.345 7.345 0 0 1 7.345 7.346Z"></path>
                                    <path class="c7moj" d="M3.036 15.025c.475-6.403 5.587-11.514 11.99-11.99V7.68a7.345 7.345 0 0 1-7.346 7.345H3.036Zm21.284 1.95h4.644c-.475 6.402-5.586 11.514-11.989 11.989V24.32a7.345 7.345 0 0 1 7.345-7.345Z"></path>
                                  </svg>                                  
                            </a>
                        </div>
            
                        <!-- Navigation links -->
                        <nav class="c3927 cezsk">
                            <ul class="chwso cxpc2 cmj1h cc7et cezsk">
                                <li>
                                    <a class="cpvyo cv7b2 cj90m c2gcs ccjiw cjnro c02c5" href="https://preview.cruip.com/waitlist/updates.html">Updates</a>
                                </li>
                                <li>
                                    <a class="cpvyo cv7b2 cj90m cgvn6 c2gcs ccjiw cjnro c02c5" href="https://preview.cruip.com/waitlist/faq.html">FAQ</a>
                                </li>
                                <li>
                                    <a class="cpvyo cv7b2 cj90m cgvn6 c2gcs ccjiw cjnro c02c5" href="https://preview.cruip.com/waitlist/contact.html">Contact us</a>
                                </li>                                
                            </ul>
                        </nav>

                        <!-- Dark / Light mode toggle -->
                        <div class="chso3 ctuhr cezsk">
                            <input type="checkbox" name="light-switch" id="light-switch" class="light-switch cz99u">
                            <label class="c9yqy co456" for="light-switch">
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path class="cdp5p crwfp" d="M9 0H7v2h2V0ZM14.294 3.052 12.88 1.637 11.466 3.05l1.413 1.414 1.415-1.413ZM16 7h-2v2h2V7ZM11.535 13.02l1.415 1.413 1.414-1.415-1.415-1.413-1.414 1.414ZM9 14H7v2h2v-2ZM1.566 12.948l1.414 1.415 1.415-1.413-1.414-1.415-1.415 1.413ZM2 7H0v2h2V7ZM4.465 3.12 3.05 1.707 1.636 3.12l1.415 1.414L4.465 3.12Z"></path>
                                    <path class="c7cme cksqw" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"></path>
                                </svg>
                                <span class="cz99u">Switch to light / dark version</span>
                            </label>
                        </div>
            
                    </div>
                </div>
            </div>
        </header>

        <!-- Page content -->
        <main class="cgnjb">
            
            <section>
                <div class="c5fcz cnmmr cg498 cw2nq">
                    <div class="cy6zq crh5c">

                        <div class="cpthp czrhe cs10o">
                            <div class="c9pd1">

                                <div class="c0drb cpgkc ckhko c26j7 c2wd7 cl110 cd8xp ctanz cqckm conig cc8zc c0zgo c3927 chwso clw5z ckuy9 cjewx cx8zz ckwv3 cb7i0 cj1vz cezsk">
                                    <div class="cxo8x cw1gd cmkro cbc1e cyfzq cevtx cshco cv8gl cgrfs cxcm6 cxpc2 ccjiw c1l9r ckwv3 cryv2 cc7et cf0cr c02c5">
                                        <!-- Border with dots in corners -->
                                        <div class="c3cy3 cpoza c4xyw cauvd cehp5 chqy8 c3ehf cks6d c8z9n crgvw c2z22 cr2ij cpue7 c8arv cevtx cr5hf cw7re cxgoq cjkk2 c1qs0 ckoug cpnw7 cr8aa cag0k" aria-hidden="true"></div>                                    
                                        <span class="c0cnt ce627 cyiq9 ccjbb cfatl c2gcs ckwv3">Waitlist v1 <span class="cw5ms cyt8n">·</span> Coming Soon</span>
                                    </div>
                                </div>

                                <h1 class="c0cnt ce627 cwr74 cfatl crlpf cbwmu c2gcs cr5d0 cvxf3 ch47f casec">The software that sparks your imagination</h1>
                                <p class="cauea cgrfs cs94t">
                                    Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                                </p>

                            </div>
                        </div>

                        <div class="c1t8r c330t cfs2v c1upr c2wd7 cl110 cd8xp ctanz cqckm conig cc8zc c0zgo c3927 ciay6 c7a79 chwso clw5z cjewx ckwv3 cgio7 c9l48 cezsk">
                            <div class="cgc2y c81ef czrhe coe0p">
                                <form class="ckwv3">
                                    
                                    <!-- Border with dots in corners -->
                                    <div class="cq4r1 cfdqj ck5ws c5pov cehp5 chqy8 cym3j cxpxq cvvig c0cnt cba0k crgvw ci2tu c2z22 csmr0 cr2ij cpue7 c26dl cevtx cr5hf cxgoq cjkk2 c1qs0 ccjiw cr8aa clot7 cag0k" aria-hidden="true"></div>

                                    <div class="cacgm">
                                        <div>
                                            <label class="cz99u" for="email">Email</label>
                                            <div class="ckwv3">
                                                <div class="cis7l cwysf cud52 chwso c9v7h cr8aa cu4yo cezsk cyi7p">
                                                    <svg class="cdyx3" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                                                        <path d="M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z"></path>
                                                    </svg>                                                      
                                                </div>
                                                <input id="email" class="coyoz cc7et coe0p cyujy cjygq" type="email" placeholder="Your email...">
                                            </div>
                                        </div>
                                        <div>
                                            <button class="cg4ff czbbd cfhsj czmlk ceto1 ccs7d coe0p chuxb">Join The Waitlist</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="cpthp czrhe">
                            <div class="c9pd1">
                                <!-- Avatars -->
                                <ul class="c3927 cazyq c5xjj cezsk">
                                    <li>
                                        <img class="cxhhk" src="./Waitlist HTML Demo - Home_files/avatar-01.jpg" width="32" height="32" alt="Avatar 01">
                                    </li>
                                    <li>
                                        <img class="cxhhk" src="./Waitlist HTML Demo - Home_files/avatar-02.jpg" width="32" height="32" alt="Avatar 02">
                                    </li>
                                    <li>
                                        <img class="cxhhk" src="./Waitlist HTML Demo - Home_files/avatar-03.jpg" width="32" height="32" alt="Avatar 03">
                                    </li>
                                    <li>
                                        <img class="cxhhk" src="./Waitlist HTML Demo - Home_files/avatar-04.jpg" width="32" height="32" alt="Avatar 04">
                                    </li>
                                    <li>
                                        <img class="cxhhk" src="./Waitlist HTML Demo - Home_files/avatar-05.jpg" width="32" height="32" alt="Avatar 05">
                                    </li>                                
                                </ul>
                                <p class="ckasv cc7et">Join the <span class="cj90m cgrfs cxpc2">2.000+</span> members who have already signed up.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>

        <!-- Site footer -->
        <footer class="c9v3y crbyi c7hiy cvq6c c07f0">
            <div class="cy6zq crh5c">
                <div class="cpthp czrhe">
                    <div class="c9pd1 c82jv">
                        <p class="cauea cgrfs cc7et">© Waitlist - A more meaningful home for software. Built by <a class="cb5h9 cfx8h cxpc2" href="https://twitter.com/pacovitiello" target="_blank">@pacovitiello</a> &amp; <a class="cb5h9 cfx8h cxpc2" href="https://twitter.com/DavidePacilio" target="_blank">@davidepacilio.</a></p>
                    </div>
                </div>
            </div>
        </footer>

    </div>

</body>