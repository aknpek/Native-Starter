import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const SvgComponent = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={167}
    height={120}
    fill="none"
    {...props}
  >
    <Rect width={167} height={120} fill="#EBE5E5" rx={25} />
    <Path
      fill="#393434"
      d="M49.548 72.537a.535.535 0 0 1-.14.161.297.297 0 0 1-.175.049c-.08 0-.172-.04-.28-.119a4.181 4.181 0 0 0-.406-.259 2.943 2.943 0 0 0-.58-.266 2.47 2.47 0 0 0-.82-.119 2.37 2.37 0 0 0-.805.126c-.228.08-.422.189-.58.329-.155.14-.271.306-.35.497-.08.187-.12.39-.12.609 0 .28.068.513.203.7.14.182.322.338.546.469.229.13.486.245.77.343.29.093.584.191.882.294.304.103.598.22.882.35.29.126.546.287.77.483.229.196.41.436.546.721.14.285.21.635.21 1.05 0 .439-.074.852-.224 1.239a2.83 2.83 0 0 1-.658 1.001 3.017 3.017 0 0 1-1.057.672 3.86 3.86 0 0 1-1.42.245 4.381 4.381 0 0 1-1.779-.35 4.217 4.217 0 0 1-1.365-.959l.392-.644a.49.49 0 0 1 .133-.126.322.322 0 0 1 .182-.056.37.37 0 0 1 .203.077c.08.047.168.107.266.182s.21.156.336.245c.126.089.269.17.427.245.164.075.348.138.553.189.206.047.437.07.693.07.322 0 .61-.044.861-.133a1.82 1.82 0 0 0 .637-.371c.178-.163.313-.357.406-.581.094-.224.14-.474.14-.749 0-.303-.07-.55-.21-.742a1.657 1.657 0 0 0-.539-.49 3.64 3.64 0 0 0-.77-.329c-.29-.093-.583-.187-.882-.28-.298-.098-.592-.21-.882-.336a2.849 2.849 0 0 1-.77-.49c-.224-.2-.406-.45-.546-.749-.135-.303-.203-.677-.203-1.12 0-.355.068-.698.203-1.029.14-.331.34-.625.602-.882a2.99 2.99 0 0 1 .973-.616 3.58 3.58 0 0 1 1.33-.231c.56 0 1.069.089 1.526.266.462.177.868.434 1.218.77l-.329.644Zm3.844 1.372V81h-1.245v-7.091h1.245Zm.266-2.226a.785.785 0 0 1-.077.343.95.95 0 0 1-.196.28.88.88 0 0 1-.286.189.85.85 0 0 1-.343.07.85.85 0 0 1-.617-.259 1.017 1.017 0 0 1-.189-.28.85.85 0 0 1-.07-.343.85.85 0 0 1 .07-.343.876.876 0 0 1 .19-.287c.079-.084.17-.15.273-.196a.85.85 0 0 1 .343-.07.85.85 0 0 1 .343.07.828.828 0 0 1 .287.196c.083.08.149.175.195.287a.785.785 0 0 1 .077.343Zm4.673 5.852c.252 0 .473-.035.665-.105.191-.07.352-.168.483-.294.13-.126.228-.275.294-.448.065-.177.098-.371.098-.581 0-.434-.133-.78-.4-1.036-.26-.257-.64-.385-1.14-.385-.504 0-.89.128-1.155.385-.262.257-.392.602-.392 1.036 0 .21.032.404.098.581a1.286 1.286 0 0 0 .784.742c.191.07.413.105.665.105Zm2.247 3.85a.599.599 0 0 0-.147-.42.978.978 0 0 0-.4-.252 2.371 2.371 0 0 0-.573-.126 9.997 9.997 0 0 0-.7-.063l-.742-.042a8.744 8.744 0 0 1-.728-.07 1.965 1.965 0 0 0-.644.462.933.933 0 0 0-.126 1.085c.084.14.21.259.378.357.168.103.378.182.63.238.256.06.557.091.903.091.336 0 .637-.03.903-.091.266-.06.49-.147.672-.259.186-.112.329-.245.427-.399a.932.932 0 0 0 .147-.511Zm1.267-7.196v.462c0 .154-.098.252-.294.294l-.805.105c.158.308.238.649.238 1.022a2.172 2.172 0 0 1-.75 1.666c-.233.2-.513.355-.84.462a3.39 3.39 0 0 1-1.063.161c-.332 0-.644-.04-.938-.119a1.23 1.23 0 0 0-.343.301.511.511 0 0 0-.12.315c0 .168.068.296.204.385.14.084.322.145.546.182.224.037.478.06.763.07.29.01.583.026.882.049.303.019.597.054.882.105.29.051.546.135.77.252.224.117.403.278.539.483.14.205.21.471.21.798 0 .303-.077.597-.231.882a2.31 2.31 0 0 1-.651.756 3.264 3.264 0 0 1-1.05.532 4.44 4.44 0 0 1-1.393.203c-.518 0-.97-.051-1.358-.154a3.188 3.188 0 0 1-.966-.413 1.823 1.823 0 0 1-.581-.602 1.421 1.421 0 0 1-.19-.707c0-.35.11-.646.33-.889.22-.243.52-.436.903-.581a1.34 1.34 0 0 1-.504-.371c-.122-.159-.182-.371-.182-.637 0-.103.018-.208.056-.315.037-.112.093-.222.168-.329a1.811 1.811 0 0 1 .679-.574 2.189 2.189 0 0 1-.82-.777 2.161 2.161 0 0 1-.293-1.134c0-.345.065-.658.196-.938.135-.285.322-.525.56-.721.238-.2.52-.355.847-.462a3.505 3.505 0 0 1 1.085-.161c.308 0 .595.035.86.105.267.065.51.163.729.294h1.925Zm2.884.749c.154-.173.317-.329.49-.469a3.13 3.13 0 0 1 .546-.357 2.85 2.85 0 0 1 1.323-.315c.388 0 .728.065 1.022.196.299.126.546.308.742.546.2.233.352.516.455.847.103.331.154.698.154 1.099V81h-1.253v-4.515c0-.537-.123-.952-.37-1.246-.243-.299-.614-.448-1.114-.448-.368 0-.714.089-1.036.266a3.423 3.423 0 0 0-.882.721V81h-1.253v-7.091h.75c.177 0 .286.086.328.259l.098.77Zm16.884-1.029V81h-.742c-.177 0-.29-.086-.336-.259l-.098-.763c-.308.34-.653.616-1.036.826a2.74 2.74 0 0 1-1.316.308c-.387 0-.73-.063-1.03-.189a2.077 2.077 0 0 1-.741-.546 2.346 2.346 0 0 1-.455-.847 3.865 3.865 0 0 1-.147-1.099v-4.522h1.246v4.522c0 .537.121.952.364 1.246.247.294.623.441 1.127.441.368 0 .712-.086 1.029-.259.322-.177.618-.42.889-.728v-5.222h1.246Zm3.648 5.383c.23.308.479.525.75.651.27.126.574.189.91.189.662 0 1.17-.236 1.525-.707s.532-1.143.532-2.016c0-.462-.041-.859-.125-1.19a2.246 2.246 0 0 0-.35-.812 1.366 1.366 0 0 0-.567-.469 1.886 1.886 0 0 0-.764-.147c-.406 0-.763.093-1.07.28a3.1 3.1 0 0 0-.84.791v3.43Zm-.063-4.284a3.673 3.673 0 0 1 1.037-.889 2.66 2.66 0 0 1 1.344-.336c.41 0 .781.08 1.113.238.33.154.613.385.847.693.233.303.412.681.538 1.134.127.453.19.973.19 1.561 0 .523-.07 1.01-.21 1.463-.14.448-.344.838-.61 1.169a2.855 2.855 0 0 1-.966.777c-.377.187-.804.28-1.28.28-.434 0-.808-.072-1.12-.217a2.685 2.685 0 0 1-.82-.616v3.136H84.01v-9.492h.748c.178 0 .287.086.33.259l.111.84Zm20.572-1.099L103.474 81h-.987c-.121 0-.205-.08-.252-.238l-1.568-4.809a2.773 2.773 0 0 1-.091-.322l-.07-.329-.07.329a3.174 3.174 0 0 1-.091.329l-1.596 4.802c-.042.159-.135.238-.28.238h-.938l-2.296-7.091h.98c.098 0 .18.026.245.077.07.051.117.112.14.182l1.358 4.564c.08.336.142.653.19.952l.125-.469c.047-.159.096-.32.147-.483l1.498-4.592a.38.38 0 0 1 .119-.175.346.346 0 0 1 .217-.07h.546a.357.357 0 0 1 .357.245l1.463 4.592c.051.163.098.324.14.483.042.159.082.315.119.469.023-.154.051-.308.084-.462.037-.159.077-.322.119-.49l1.386-4.564a.345.345 0 0 1 .133-.182.362.362 0 0 1 .231-.077h.938Zm2.949 0V81h-1.246v-7.091h1.246Zm.266-2.226a.776.776 0 0 1-.077.343.938.938 0 0 1-.196.28.876.876 0 0 1-.287.189.847.847 0 0 1-.343.07.854.854 0 0 1-.616-.259 1.035 1.035 0 0 1-.189-.28.862.862 0 0 1 0-.686.888.888 0 0 1 .189-.287.88.88 0 0 1 .273-.196.854.854 0 0 1 .343-.07c.122 0 .236.023.343.07a.824.824 0 0 1 .287.196c.084.08.15.175.196.287a.776.776 0 0 1 .077.343Zm4.379 9.429c-.56 0-.992-.156-1.295-.469-.299-.313-.448-.763-.448-1.351v-4.34h-.854a.287.287 0 0 1-.189-.063c-.052-.047-.077-.117-.077-.21v-.497l1.162-.147.287-2.191a.278.278 0 0 1 .287-.238h.63v2.443h2.051v.903h-2.051v4.256c0 .299.072.52.217.665a.756.756 0 0 0 .56.217c.13 0 .242-.016.336-.049.098-.037.182-.077.252-.119.07-.042.128-.08.175-.112.051-.037.095-.056.133-.056.065 0 .123.04.175.119l.364.595c-.215.2-.474.36-.777.476a2.69 2.69 0 0 1-.938.168Zm4.513-6.258a3.752 3.752 0 0 1 1.008-.77 2.727 2.727 0 0 1 1.274-.287c.387 0 .728.065 1.022.196.299.126.546.308.742.546.201.233.352.516.455.847.103.331.154.698.154 1.099V81h-1.253v-4.515c0-.537-.124-.952-.371-1.246-.243-.299-.614-.448-1.113-.448-.369 0-.714.089-1.036.266a3.436 3.436 0 0 0-.882.721V81h-1.253V70.689h1.253v4.165ZM71.344 98.276l-1.575-4.081a8.206 8.206 0 0 1-.294-.938 7.639 7.639 0 0 1-.3.945l-1.576 4.074h3.745ZM74.172 102h-1.05a.45.45 0 0 1-.294-.091.563.563 0 0 1-.168-.231l-.938-2.422h-4.5l-.939 2.422a.49.49 0 0 1-.16.224.45.45 0 0 1-.295.098h-1.05l4.011-10.031h1.372L74.172 102Zm2.671-1.708c.23.308.479.525.75.651.27.126.573.189.91.189.662 0 1.17-.236 1.525-.707s.532-1.143.532-2.016c0-.462-.042-.859-.126-1.19a2.246 2.246 0 0 0-.35-.812 1.366 1.366 0 0 0-.567-.469 1.886 1.886 0 0 0-.763-.147c-.406 0-.763.093-1.07.28a3.1 3.1 0 0 0-.84.791v3.43Zm-.063-4.284a3.673 3.673 0 0 1 1.036-.889 2.66 2.66 0 0 1 1.344-.336c.411 0 .782.08 1.113.238.332.154.614.385.847.693.234.303.413.681.54 1.134.125.453.188.973.188 1.561 0 .523-.07 1.01-.21 1.463-.14.448-.343.838-.609 1.169a2.848 2.848 0 0 1-.966.777 2.85 2.85 0 0 1-1.28.28c-.435 0-.808-.072-1.12-.217a2.685 2.685 0 0 1-.82-.616v3.136H75.59v-9.492h.75c.177 0 .286.086.328.259l.112.84Zm8.331 4.284c.229.308.478.525.75.651.27.126.573.189.91.189.662 0 1.17-.236 1.525-.707s.532-1.143.532-2.016c0-.462-.042-.859-.126-1.19a2.246 2.246 0 0 0-.35-.812 1.366 1.366 0 0 0-.567-.469 1.886 1.886 0 0 0-.763-.147c-.406 0-.763.093-1.07.28a3.1 3.1 0 0 0-.84.791v3.43Zm-.063-4.284a3.673 3.673 0 0 1 1.036-.889 2.66 2.66 0 0 1 1.344-.336c.41 0 .782.08 1.113.238.331.154.614.385.847.693.233.303.413.681.54 1.134.125.453.188.973.188 1.561 0 .523-.07 1.01-.21 1.463-.14.448-.343.838-.609 1.169a2.848 2.848 0 0 1-.966.777 2.85 2.85 0 0 1-1.28.28c-.435 0-.808-.072-1.12-.217a2.685 2.685 0 0 1-.82-.616v3.136h-1.253v-9.492h.75c.176 0 .286.086.328.259l.112.84Zm8.366-4.319V102h-1.246V91.689h1.246Zm7.186 5.992c0-.29-.042-.553-.126-.791a1.668 1.668 0 0 0-.357-.623 1.503 1.503 0 0 0-.567-.406 1.886 1.886 0 0 0-.763-.147c-.597 0-1.07.175-1.42.525-.346.345-.56.826-.645 1.442h3.878Zm1.008 3.325a2.42 2.42 0 0 1-.553.49 3.527 3.527 0 0 1-.693.336 4.043 4.043 0 0 1-.756.196 4.38 4.38 0 0 1-.777.07c-.49 0-.942-.082-1.358-.245a3.08 3.08 0 0 1-1.07-.728 3.409 3.409 0 0 1-.7-1.19c-.169-.471-.253-1.013-.253-1.624 0-.495.075-.957.224-1.386.154-.43.374-.8.658-1.113a2.954 2.954 0 0 1 1.043-.742c.411-.182.873-.273 1.386-.273.425 0 .817.072 1.176.217.364.14.677.345.938.616.266.266.474.597.623.994.15.392.224.84.224 1.344 0 .196-.021.327-.063.392-.042.065-.121.098-.238.098H96.68c.014.448.075.838.182 1.169.112.331.266.609.462.833.196.219.43.385.7.497.271.107.574.161.91.161.313 0 .581-.035.805-.105a4.048 4.048 0 0 0 .994-.469.547.547 0 0 1 .287-.112c.103 0 .182.04.238.119l.35.455Z"
    />
    <Path
      fill="#FE734D"
      d="M97.106 29.592c-.2.153-3.722 2.115-3.722 6.477 0 5.046 4.482 6.832 4.616 6.876-.02.109-.712 2.445-2.363 4.825-1.472 2.095-3.01 4.186-5.348 4.186-2.339 0-2.94-1.343-5.64-1.343-2.632 0-3.567 1.387-5.707 1.387-2.139 0-3.632-1.938-5.348-4.318C71.606 44.886 70 40.544 70 36.423c0-6.61 4.347-10.116 8.626-10.116 2.273 0 4.168 1.476 5.596 1.476 1.358 0 3.477-1.564 6.064-1.564.98 0 4.502.088 6.82 3.373Zm-8.048-6.172c1.07-1.255 1.826-2.996 1.826-4.737 0-.241-.02-.486-.065-.683-1.74.065-3.811 1.146-5.06 2.578-.98 1.101-1.895 2.842-1.895 4.607 0 .265.045.53.066.615.11.02.288.045.467.045 1.562 0 3.526-1.034 4.66-2.425Z"
    />
  </Svg>
);
export default SvgComponent;