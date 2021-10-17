/* eslint-disable complexity */
import React, { Fragment } from "react";  

const getViewBox = name => {
	if (name === "menu")
		return "0 -53 384 384"

	if (name === "close")
		return "0 0 329 329";

	if (name === "deezer")
		return "0 0 97.75 97.75";

	if (name === "twitch")
		return "0 0 24 24";
	
    if (name === "phone" || name === "justice")
		return "0 0 1280 1170";

	return "0 0 512 512"
};

const getPath = name => {
	switch (name) {
	case "instagram":
		return (
			<Fragment>
				<path d="m305 256c0 27.0625-21.9375 49-49 49s-49-21.9375-49-49 21.9375-49 49-49 49 21.9375 49 49zm0 0"/>
				<path d="m370.59375 169.304688c-2.355469-6.382813-6.113281-12.160157-10.996094-16.902344-4.742187-4.882813-10.515625-8.640625-16.902344-10.996094-5.179687-2.011719-12.960937-4.40625-27.292968-5.058594-15.503906-.707031-20.152344-.859375-59.402344-.859375-39.253906 0-43.902344.148438-59.402344.855469-14.332031.65625-22.117187 3.050781-27.292968 5.0625-6.386719 2.355469-12.164063 6.113281-16.902344 10.996094-4.882813 4.742187-8.640625 10.515625-11 16.902344-2.011719 5.179687-4.40625 12.964843-5.058594 27.296874-.707031 15.5-.859375 20.148438-.859375 59.402344 0 39.25.152344 43.898438.859375 59.402344.652344 14.332031 3.046875 22.113281 5.058594 27.292969 2.359375 6.386719 6.113281 12.160156 10.996094 16.902343 4.742187 4.882813 10.515624 8.640626 16.902343 10.996094 5.179688 2.015625 12.964844 4.410156 27.296875 5.0625 15.5.707032 20.144532.855469 59.398438.855469 39.257812 0 43.90625-.148437 59.402344-.855469 14.332031-.652344 22.117187-3.046875 27.296874-5.0625 12.820313-4.945312 22.953126-15.078125 27.898438-27.898437 2.011719-5.179688 4.40625-12.960938 5.0625-27.292969.707031-15.503906.855469-20.152344.855469-59.402344 0-39.253906-.148438-43.902344-.855469-59.402344-.652344-14.332031-3.046875-22.117187-5.0625-27.296874zm-114.59375 162.179687c-41.691406 0-75.488281-33.792969-75.488281-75.484375s33.796875-75.484375 75.488281-75.484375c41.6875 0 75.484375 33.792969 75.484375 75.484375s-33.796875 75.484375-75.484375 75.484375zm78.46875-136.3125c-9.742188 0-17.640625-7.898437-17.640625-17.640625s7.898437-17.640625 17.640625-17.640625 17.640625 7.898437 17.640625 17.640625c-.003906 9.742188-7.898437 17.640625-17.640625 17.640625zm0 0"/>
				<path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm146.113281 316.605469c-.710937 15.648437-3.199219 26.332031-6.832031 35.683593-7.636719 19.746094-23.246094 35.355469-42.992188 42.992188-9.347656 3.632812-20.035156 6.117188-35.679687 6.832031-15.675781.714844-20.683594.886719-60.605469.886719-39.925781 0-44.929687-.171875-60.609375-.886719-15.644531-.714843-26.332031-3.199219-35.679687-6.832031-9.8125-3.691406-18.695313-9.476562-26.039063-16.957031-7.476562-7.339844-13.261719-16.226563-16.953125-26.035157-3.632812-9.347656-6.121094-20.035156-6.832031-35.679687-.722656-15.679687-.890625-20.6875-.890625-60.609375s.167969-44.929688.886719-60.605469c.710937-15.648437 3.195312-26.332031 6.828125-35.683593 3.691406-9.808594 9.480468-18.695313 16.960937-26.035157 7.339844-7.480469 16.226563-13.265625 26.035157-16.957031 9.351562-3.632812 20.035156-6.117188 35.683593-6.832031 15.675781-.714844 20.683594-.886719 60.605469-.886719s44.929688.171875 60.605469.890625c15.648437.710937 26.332031 3.195313 35.683593 6.824219 9.808594 3.691406 18.695313 9.480468 26.039063 16.960937 7.476563 7.34375 13.265625 16.226563 16.953125 26.035157 3.636719 9.351562 6.121094 20.035156 6.835938 35.683593.714843 15.675781.882812 20.683594.882812 60.605469s-.167969 44.929688-.886719 60.605469zm0 0"/>
			</Fragment>
		);

	case "twitter":
		return (
			<path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm116.886719 199.601562c.113281 2.519532.167969 5.050782.167969 7.59375 0 77.644532-59.101563 167.179688-167.183594 167.183594h.003906-.003906c-33.183594 0-64.0625-9.726562-90.066406-26.394531 4.597656.542969 9.277343.8125 14.015624.8125 27.53125 0 52.867188-9.390625 72.980469-25.152344-25.722656-.476562-47.410156-17.464843-54.894531-40.8125 3.582031.6875 7.265625 1.0625 11.042969 1.0625 5.363281 0 10.558593-.722656 15.496093-2.070312-26.886718-5.382813-47.140624-29.144531-47.140624-57.597657 0-.265624 0-.503906.007812-.75 7.917969 4.402344 16.972656 7.050782 26.613281 7.347657-15.777343-10.527344-26.148437-28.523438-26.148437-48.910157 0-10.765624 2.910156-20.851562 7.957031-29.535156 28.976563 35.554688 72.28125 58.9375 121.117187 61.394532-1.007812-4.304688-1.527343-8.789063-1.527343-13.398438 0-32.4375 26.316406-58.753906 58.765625-58.753906 16.902344 0 32.167968 7.144531 42.890625 18.566406 13.386719-2.640625 25.957031-7.53125 37.3125-14.261719-4.394531 13.714844-13.707031 25.222657-25.839844 32.5 11.886719-1.421875 23.214844-4.574219 33.742187-9.253906-7.863281 11.785156-17.835937 22.136719-29.308593 30.429687zm0 0"/>
		);

	case "youtube":
		return (
			<Fragment>
				<path d="m224.113281 303.960938 83.273438-47.960938-83.273438-47.960938zm0 0"/>
				<path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm159.960938 256.261719s0 51.917969-6.585938 76.953125c-3.691406 13.703125-14.496094 24.507812-28.199219 28.195312-25.035156 6.589844-125.175781 6.589844-125.175781 6.589844s-99.878906 0-125.175781-6.851562c-13.703125-3.6875-24.507813-14.496094-28.199219-28.199219-6.589844-24.769531-6.589844-76.949219-6.589844-76.949219s0-51.914062 6.589844-76.949219c3.6875-13.703125 14.757812-24.773437 28.199219-28.460937 25.035156-6.589844 125.175781-6.589844 125.175781-6.589844s100.140625 0 125.175781 6.851562c13.703125 3.6875 24.507813 14.496094 28.199219 28.199219 6.851562 25.035157 6.585938 77.210938 6.585938 77.210938zm0 0"/>
			</Fragment>
		);

	case "spotify":
		return (
			<path d="M256,0C114.848,0,0,114.848,0,256s114.848,256,256,256s256-114.848,256-256S397.152,0,256,0z M373.44,369.536
			c-3.136,4.448-8.064,6.816-13.088,6.816c-3.2,0-6.4-0.928-9.184-2.912c-60-42.176-159.808-44.512-227.2-28.8
			c-8.544,2.016-17.216-3.36-19.2-11.968c-1.984-8.608,3.328-17.216,11.968-19.232c74.08-17.152,184.8-14.016,252.8,33.824
			C376.768,352.352,378.496,362.304,373.44,369.536z M404.672,307.104c-3.136,4.352-8.032,6.656-12.992,6.656
			c-3.264,0-6.496-0.96-9.344-3.008c-69.6-49.952-155.104-62.368-269.216-39.072c-8.608,1.696-17.12-3.808-18.88-12.48
			c-1.792-8.64,3.808-17.12,12.448-18.88c123.424-25.184,216.928-11.104,294.304,44.416
			C408.16,289.92,409.824,299.904,404.672,307.104z M436.224,223.264c-3.104,4.576-8.16,7.008-13.248,7.008
			c-3.104,0-6.24-0.896-8.992-2.752c-88.224-59.872-222.336-60.16-309.152-29.44c-8.32,2.88-17.472-1.44-20.416-9.792
			c-2.944-8.32,1.408-17.472,9.76-20.416C188.608,134.496,334.944,135.2,432,201.024
			C439.296,205.984,441.152,215.936,436.224,223.264z"/>	
		);

	case "deezer":
		return (
			<path d="M48.875,0C21.883,0,0,21.882,0,48.875S21.883,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.867,0,48.875,0z
			M25.676,69.248H12.365v-4.033h13.311V69.248z M25.676,64.006H12.365V59.97h13.311V64.006z M25.676,58.762H12.365v-4.035h13.311
			V58.762z M25.676,53.516H12.365v-4.033h13.311V53.516z M25.676,48.271H12.365v-4.034h13.311V48.271z M40.604,69.248H27.291v-4.033
			h13.313V69.248z M40.604,64.006H27.291V59.97h13.313V64.006z M40.604,58.762H27.291v-4.035h13.313V58.762z M55.531,69.248H42.219
			v-4.033h13.313L55.531,69.248L55.531,69.248z M55.531,64.006H42.219V59.97h13.313L55.531,64.006L55.531,64.006z M55.531,58.762
			H42.219v-4.035h13.313L55.531,58.762L55.531,58.762z M55.531,53.516H42.219v-4.033h13.313L55.531,53.516L55.531,53.516z
			M55.531,48.271H42.219v-4.034h13.313L55.531,48.271L55.531,48.271z M55.531,43.026H42.219v-4.034h13.313L55.531,43.026
			L55.531,43.026z M55.531,37.783H42.219v-4.035h13.313L55.531,37.783L55.531,37.783z M70.457,69.248H57.145v-4.033h13.313
			L70.457,69.248L70.457,69.248z M70.457,64.006H57.145V59.97h13.313L70.457,64.006L70.457,64.006z M70.457,58.762H57.145v-4.035
			h13.313L70.457,58.762L70.457,58.762z M70.457,53.516H57.145v-4.033h13.313L70.457,53.516L70.457,53.516z M70.457,48.271H57.145
			v-4.034h13.313L70.457,48.271L70.457,48.271z M85.385,69.248H72.072v-4.033h13.312V69.248z M85.385,64.006H72.072V59.97h13.312
			V64.006z M85.385,58.759H72.072v-4.034h13.312V58.759z M85.385,53.516H72.072V49.48h13.312V53.516z M85.385,48.271H72.072v-4.037
			h13.312V48.271z M85.385,43.025H72.072v-4.033h13.312V43.025z M85.385,37.78H72.072v-4.033h13.312V37.78z M72.072,32.536v-4.034
			h13.312v4.034H72.072z"/>
		);

	case "menu":
		return (
			<Fragment>
				<path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
				<path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
				<path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
			</Fragment>
		);

	case "close":
		return (
			<path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>
		)

    case "twitch":
        return (
            <Fragment>
                <path d="M10.224 17.806l1.776-1.776h3.343l2.09-2.09v-6.686h-10.03v8.776h2.821v1.776zm3.866-8.149h1.254v3.653h-1.254v-3.653zm-3.344 0h1.254v3.653h-1.254v-3.653zm1.254-9.657c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.687 14.567l-3.657 3.657h-2.716l-1.777 1.776h-1.88v-1.776h-3.344v-9.821l.941-2.403h12.433v8.567z"/>
            </Fragment>
        );
    
    case "phone":
        return (
            <Fragment>
                <metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata>
                <g transform="translate(0.000000,1170.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M2705 11686 c-22 -8 -90 -30 -152 -50 -141 -46 -389 -151 -553 -234 -636 -323 -1154 -800 -1545 -1424 -97 -156 -273 -496 -350 -678 -82 -196 -96 -258 -102 -470 -3 -109 0 -238 7 -315 6 -71 14 -195 16 -275 l5 -145 107 -224 c159 -335 359 -738 447 -901 835 -1552 1991 -2970 3315 -4066 1043 -863 2169 -1548 3440 -2091 577 -246 1327 -496 2020 -673 69 -17 197 -52 285 -76 156 -43 166 -45 380 -55 453 -23 660 10 950 151 405 196 920 671 1269 1170 121 172 242 369 287 466 89 192 214 674 251 964 16 132 16 551 0 680 -7 52 -17 133 -23 180 -34 270 -106 408 -238 456 -115 42 -510 27 -1491 -56 -1285 -110 -1824 -164 -1959 -197 -113 -27 -177 -154 -220 -436 -12 -75 -21 -166 -21 -204 -2 -275 -81 -432 -242 -474 -45 -12 -48 -12 -143 34 -164 79 -334 199 -840 591 -685 530 -2165 1721 -3460 2785 -986 810 -1219 1017 -1244 1107 -16 59 3 116 62 181 94 102 257 195 595 339 203 86 494 228 567 276 63 41 105 118 105 190 0 95 -91 396 -280 928 -28 80 -64 181 -80 225 -32 92 -108 302 -179 503 -27 75 -88 242 -135 370 -47 129 -125 342 -172 475 -84 235 -135 364 -263 667 -85 199 -122 252 -206 291 -55 25 -159 32 -210 15z"/>
                </g> 
            </Fragment>
        );

    case "justice":
        return (
            <Fragment>
                <metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata>
                <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M6343 11110 c-46 -28 -58 -58 -109 -267 -56 -235 -86 -336 -131 -438 -103 -234 -98 -442 14 -663 34 -67 44 -95 36 -103 -6 -6 -9 -26 -6 -44 4 -22 -4 -53 -26 -103 -18 -40 -46 -128 -63 -196 l-32 -124 -80 -7 c-291 -24 -589 -93 -894 -207 -178 -66 -283 -113 -473 -209 -198 -101 -308 -173 -591 -386 -344 -260 -502 -362 -678 -435 -129 -55 -127 -54 -135 -16 -17 75 -72 146 -145 184 -25 13 -56 19 -110 19 -85 0 -133 -20 -186 -77 -54 -57 -69 -95 -69 -178 0 -88 21 -136 84 -193 l40 -36 -46 -93 c-55 -113 -473 -976 -553 -1143 -32 -66 -147 -304 -257 -530 -109 -225 -318 -656 -463 -957 l-265 -548 -33 0 -33 0 42 -62 c63 -95 258 -283 369 -357 256 -169 586 -286 960 -338 178 -25 633 -24 815 0 489 67 885 237 1156 494 83 80 209 232 209 254 0 5 -12 9 -28 9 -27 0 -40 27 -447 867 -231 477 -585 1207 -786 1623 l-365 755 95 16 c332 56 617 188 1036 479 77 53 189 130 249 170 305 204 735 377 1143 459 124 25 319 51 383 51 14 0 18 -24 28 -172 22 -317 82 -600 189 -887 30 -80 33 -97 23 -116 -14 -26 -7 -45 17 -45 13 0 14 -20 8 -167 -4 -93 -9 -175 -10 -183 -1 -8 -6 -89 -11 -180 -4 -91 -8 -167 -9 -170 -1 -3 -5 -84 -10 -180 -5 -96 -9 -177 -10 -180 -1 -3 -5 -84 -10 -180 -5 -96 -9 -177 -10 -180 -1 -3 -5 -88 -9 -190 -5 -102 -10 -192 -11 -200 -1 -8 -6 -98 -9 -200 -4 -102 -9 -201 -11 -220 -10 -88 -27 -781 -23 -920 4 -118 10 -170 26 -218 24 -73 20 -93 -25 -147 -65 -76 -79 -198 -35 -298 18 -41 19 -46 4 -61 -14 -14 -14 -17 2 -34 16 -18 14 -34 -40 -303 -67 -337 -73 -422 -50 -698 9 -106 16 -222 16 -257 l0 -64 -332 0 c-329 0 -334 0 -384 -24 -66 -31 -115 -75 -145 -131 l-24 -45 -128 0 c-185 0 -262 -31 -346 -141 -28 -37 -42 -46 -87 -56 -79 -18 -128 -47 -171 -100 -80 -99 -94 -110 -189 -138 -49 -15 -105 -36 -125 -46 -43 -22 -89 -73 -89 -100 0 -19 39 -19 2420 -19 2381 0 2420 0 2420 19 0 52 -82 107 -215 146 -90 26 -109 39 -169 114 -61 77 -126 116 -207 127 -40 5 -49 11 -59 34 -16 40 -77 95 -140 127 -52 26 -64 28 -203 31 l-148 4 -10 26 c-18 46 -75 107 -130 137 l-54 30 -342 3 -343 3 0 74 c0 40 7 158 16 262 21 252 16 342 -39 618 -68 342 -68 343 -54 366 9 14 9 24 1 36 -8 13 -6 27 7 59 45 100 31 223 -34 299 -45 54 -49 74 -25 147 29 89 33 254 19 701 -7 205 -14 390 -16 412 -2 22 -7 119 -10 215 -3 96 -8 191 -10 210 -2 19 -7 109 -10 200 -4 91 -8 176 -10 190 -2 14 -6 95 -10 180 -4 85 -8 166 -10 180 -2 14 -6 95 -10 180 -4 85 -8 166 -10 180 -2 14 -7 95 -10 180 -4 85 -9 162 -10 170 -1 8 -6 93 -10 187 l-7 173 23 19 c22 18 23 20 7 38 -11 12 -14 23 -8 34 19 34 81 217 115 337 63 229 96 436 110 685 6 103 9 117 25 117 43 0 232 -22 310 -36 307 -55 679 -181 964 -327 66 -33 194 -111 285 -172 91 -61 236 -159 321 -216 365 -246 665 -375 968 -414 28 -4 52 -10 52 -14 0 -4 -266 -556 -590 -1226 -325 -671 -677 -1399 -783 -1617 l-192 -398 -33 0 -33 0 42 -63 c24 -34 93 -112 154 -173 277 -278 668 -450 1180 -521 181 -24 636 -24 815 1 508 70 899 244 1175 520 61 61 130 139 154 173 l42 63 -33 0 -34 0 -211 438 c-117 240 -473 977 -792 1636 l-581 1199 45 39 c107 94 112 259 11 366 -53 57 -101 77 -186 77 -57 0 -84 -5 -115 -22 -70 -37 -124 -107 -140 -181 -8 -38 -4 -39 -144 19 -151 63 -330 177 -643 411 -327 245 -407 298 -623 409 -460 238 -915 376 -1367 415 l-77 6 -16 72 c-21 94 -61 220 -87 269 -13 26 -18 52 -16 76 3 20 0 44 -6 54 -9 14 -6 26 12 55 41 66 74 145 94 227 17 65 20 100 16 190 -6 116 -17 157 -91 335 -20 47 -64 198 -97 335 -34 138 -69 263 -77 278 -17 34 -68 67 -103 67 -14 0 -39 -9 -57 -20z m-3385 -3212 c7 -7 12 -24 12 -38 0 -14 -5 -31 -12 -38 -7 -7 -24 -12 -38 -12 -14 0 -31 5 -38 12 -7 7 -12 24 -12 38 0 14 5 31 12 38 7 7 24 12 38 12 14 0 31 -5 38 -12z m6960 0 c7 -7 12 -24 12 -38 0 -14 -5 -31 -12 -38 -7 -7 -24 -12 -38 -12 -14 0 -31 5 -38 12 -7 7 -12 24 -12 38 0 14 5 31 12 38 7 7 24 12 38 12 14 0 31 -5 38 -12z m-7044 -294 c15 -6 16 -158 16 -1625 l0 -1619 -804 0 -805 0 73 153 c41 83 154 319 253 522 99 204 419 866 713 1473 293 606 534 1102 536 1102 1 0 9 -3 18 -6z m7218 -296 c229 -476 1395 -2882 1412 -2917 l17 -31 -806 0 -805 0 0 1618 c0 890 3 1622 7 1625 3 4 12 7 18 7 6 0 77 -136 157 -302z m-6942 -38 c87 -179 395 -815 685 -1415 290 -599 572 -1181 626 -1292 l98 -203 -805 0 -804 0 0 1621 0 1620 22 -3 c18 -2 50 -62 178 -328z m6693 -1287 l-3 -1618 -799 -3 -800 -2 68 142 c38 79 109 226 158 328 50 102 361 745 693 1430 716 1479 646 1340 668 1340 16 0 17 -89 15 -1617z"/>
                </g>
            </Fragment>
        )

	default:
		return <path />;
	}
};

export { getPath, getViewBox };