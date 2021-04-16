window.BENCHMARK_DATA = {
  "lastUpdate": 1618572367086,
  "repoUrl": "https://github.com/Horki/tokio",
  "entries": {
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "distinct": true,
          "id": "af032dbf59195f5a637c14fd8805f45cce8c8563",
          "message": "try again",
          "timestamp": "2020-11-13T16:47:49-08:00",
          "tree_id": "2c351a9bf2bc6d1fb70754ee19640da3b69df204",
          "url": "https://github.com/tokio-rs/tokio/commit/af032dbf59195f5a637c14fd8805f45cce8c8563"
        },
        "date": 1605314959564,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1019,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14559,
            "range": "± 3929",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1045,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14917,
            "range": "± 3866",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 589,
            "range": "± 34",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/tokio-rs/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605324749506,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 924,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15161,
            "range": "± 4086",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 874,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14986,
            "range": "± 4366",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 493,
            "range": "± 85",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/tokio-rs/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605549190558,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1052,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16954,
            "range": "± 8337",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1096,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14894,
            "range": "± 2274",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 611,
            "range": "± 25",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5cb4c20422a35b51bfba3391744f8bcb54f7581",
          "message": "net: Add send/recv buf size methods to `TcpSocket` (#3145)\n\nThis commit adds `set_{send, recv}_buffer_size` methods to `TcpSocket`\r\nfor setting the size of the TCP send and receive buffers, and `{send,\r\nrecv}_buffer_size` methods for returning the current value. These just\r\ncall into similar methods on `mio`'s `TcpSocket` type, which were added\r\nin tokio-rs/mio#1384.\r\n\r\nRefs: #3082\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-16T12:29:03-08:00",
          "tree_id": "fcf642984a21d04533efad0cdde613d294635c4d",
          "url": "https://github.com/tokio-rs/tokio/commit/f5cb4c20422a35b51bfba3391744f8bcb54f7581"
        },
        "date": 1605558676197,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1058,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15094,
            "range": "± 3743",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1022,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14201,
            "range": "± 3791",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 545,
            "range": "± 77",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0ebb4154748166a4ba07baa4b424a1c45efd219",
          "message": "sync: add `Notify::notify_waiters` (#3098)\n\nThis PR makes `Notify::notify_waiters` public. The method\r\nalready exists, but it changes the way `notify_waiters`,\r\nis used. Previously in order for the consumer to\r\nregister interest, in a notification triggered by\r\n`notify_waiters`, the `Notified` future had to be\r\npolled. This introduced friction when using the api\r\nas the future had to be pinned before polled.\r\n\r\nThis change introduces a counter that tracks how many\r\ntimes `notified_waiters` has been called. Upon creation of\r\nthe future the number of times is loaded. When first\r\npolled the future compares this number with the count\r\nstate of the `Notify` type. This avoids the need for\r\nregistering the waiter upfront.\r\n\r\nFixes: #3066",
          "timestamp": "2020-11-16T12:49:35-08:00",
          "tree_id": "5ea4d611256290f62baea1a9ffa3333b254181df",
          "url": "https://github.com/tokio-rs/tokio/commit/d0ebb4154748166a4ba07baa4b424a1c45efd219"
        },
        "date": 1605559893134,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 981,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15833,
            "range": "± 8715",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1067,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16713,
            "range": "± 13609",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 568,
            "range": "± 131",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/tokio-rs/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605570348676,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1005,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13752,
            "range": "± 3698",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 927,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13180,
            "range": "± 3450",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 541,
            "range": "± 63",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/tokio-rs/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605636002716,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 905,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 15309,
            "range": "± 5774",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 954,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15280,
            "range": "± 6096",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 523,
            "range": "± 80",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34fcef258b84d17f8d418b39eb61fa07fa87c390",
          "message": "io: add vectored writes to `AsyncWrite` (#3149)\n\nThis adds `AsyncWrite::poll_write_vectored`, and implements it for\r\n`TcpStream` and `UnixStream`.\r\n\r\nRefs: #3135.",
          "timestamp": "2020-11-18T10:41:47-08:00",
          "tree_id": "98e37fc2d6fa541a9e499331df86ba3d1b7b6e3a",
          "url": "https://github.com/tokio-rs/tokio/commit/34fcef258b84d17f8d418b39eb61fa07fa87c390"
        },
        "date": 1605725012703,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 913,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14214,
            "range": "± 4731",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 922,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15159,
            "range": "± 5870",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 487,
            "range": "± 100",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/tokio-rs/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605731980234,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 751,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12495,
            "range": "± 3795",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 821,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 12921,
            "range": "± 4051",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 471,
            "range": "± 120",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84",
          "message": "util: fix typo in udp/frame.rs (#3154)",
          "timestamp": "2020-11-20T15:06:14+09:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/tokio-rs/tokio/commit/49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84"
        },
        "date": 1605852495335,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1026,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 17561,
            "range": "± 5098",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1069,
            "range": "± 373",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16640,
            "range": "± 8681",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 554,
            "range": "± 107",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/tokio-rs/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605896461076,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 851,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13799,
            "range": "± 2696",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 869,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14280,
            "range": "± 5421",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 493,
            "range": "± 69",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "40d959263bc16771882b2d1c9356f1ec02957c3d",
          "message": "macros: fix unused_braces in generated code (#3404)",
          "timestamp": "2021-01-11T19:20:40+09:00",
          "tree_id": "b7fc026d9435a2c7ce532071d3728ee9c5552c05",
          "url": "https://github.com/Horki/tokio/commit/40d959263bc16771882b2d1c9356f1ec02957c3d"
        },
        "date": 1610399448966,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1031,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14622,
            "range": "± 2420",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1064,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15218,
            "range": "± 3464",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 578,
            "range": "± 26",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomas@orozco.fr",
            "name": "Thomas Orozco",
            "username": "krallin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47be928444babf84507a69ac42bb9c9447c78672",
          "message": "sync: yield initial value in WatchStream (#3576)",
          "timestamp": "2021-03-05T21:35:12+01:00",
          "tree_id": "72e3da0a77d2c90ee35e4ff2dd1e16d33f91271b",
          "url": "https://github.com/Horki/tokio/commit/47be928444babf84507a69ac42bb9c9447c78672"
        },
        "date": 1614997447151,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 949,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 13693,
            "range": "± 4555",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1006,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14153,
            "range": "± 3001",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 566,
            "range": "± 17",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "704de8c01b331c2651c0cdb0d5ec6b0657e14344",
          "message": "stream: remove duplicate `doc(test(..))` & `cfg_attr` declarations (#3571)",
          "timestamp": "2021-03-06T20:54:28+09:00",
          "tree_id": "05cfb9504112210a7d4e372c30c16177aee4ee59",
          "url": "https://github.com/Horki/tokio/commit/704de8c01b331c2651c0cdb0d5ec6b0657e14344"
        },
        "date": 1615035322981,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 940,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16822,
            "range": "± 7677",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 952,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16000,
            "range": "± 6740",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 518,
            "range": "± 172",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edfff7551abc24e6d6ee5e0dc8e894cf1309a53d",
          "message": "util: anotate time module as requiring time feature (#3606)\n\nSigned-off-by: Zahari Dichev <zaharidichev@gmail.com>",
          "timestamp": "2021-03-11T16:02:01+01:00",
          "tree_id": "a2a71b1a527cc8cdb62c8b82081da5c9e003bfc3",
          "url": "https://github.com/Horki/tokio/commit/edfff7551abc24e6d6ee5e0dc8e894cf1309a53d"
        },
        "date": 1615488981501,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 950,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14145,
            "range": "± 4185",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 983,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15409,
            "range": "± 3781",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 567,
            "range": "± 301",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "724ba348d1754deb29efa70852d0a745f3b0d90e",
          "message": "chore: fix warning from new Rust version (#3647)",
          "timestamp": "2021-03-26T19:22:43+09:00",
          "tree_id": "3714a7b2697ec4f4f53c8275774ef23a92372496",
          "url": "https://github.com/Horki/tokio/commit/724ba348d1754deb29efa70852d0a745f3b0d90e"
        },
        "date": 1616812708580,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 916,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14996,
            "range": "± 3677",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 968,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15646,
            "range": "± 7152",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 513,
            "range": "± 78",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6da67b2e612455e16c11967c762ae802c2ac428",
          "message": "sync: add `mpsc::Sender::{reserve_owned, try_reserve_owned}` (#3704)\n\n* sync: add `mpsc::Sender::{reserve_owned, try_reserve_owned}`\r\n\r\n## Motivation\r\n\r\nThe `mpsc::Sender::reserve` method currently returns a permit that borrows\r\nfrom the `Sender`. It would be nice to have a version of it that returns\r\nan owned permit.\r\n\r\n## Solution\r\n\r\nThis branch adds an `OwnedPermit` type and `Sender::{reserve_owned,\r\ntry_reserve_owned}` methods. Unlike the comparable methods on\r\n`Semaphore`, these methods do *not* require an `Arc<Sender>` as the\r\nreceiver; this is because the sender internally reference counts the\r\nchannel and is already cheap to clone. Requiring an `Arc` would simply\r\nadd an unnecessary second layer of reference counting, which is not\r\nideal; instead, the documentation encourages the user to clone the\r\nsender prior to calling `reserve_owned` when necessary.\r\n\r\nSince these methods take the `Sender` by value, they also have the ability\r\nto _return_ the `Sender` from a successful `OwnedPermit::send`. This\r\nallows them to be used without additional clones. Essentially, this is a\r\nvery simple type-level encoding of the sender's state, with the\r\ntransitions\r\n```\r\n      ┌──────┐\r\n ┌───►│Sender├───┐\r\n │    └──────┘   │\r\nsend          reserve\r\n │ ┌───────────┐ │\r\n └─┤OwnedPermit│◄┘\r\n   └───────────┘\r\n```\r\n\r\nAdditionally, I added an `OwnedPermit::release`, which returns the\r\n`Sender` and releases the permit *without* sending a message.\r\n\r\nCloses #3688 \r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2021-04-15T12:55:57-07:00",
          "tree_id": "bf29d9dc513a8d80cadd15021e58c979e5f6d691",
          "url": "https://github.com/Horki/tokio/commit/d6da67b2e612455e16c11967c762ae802c2ac428"
        },
        "date": 1618572347609,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 940,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14284,
            "range": "± 3475",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 920,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14110,
            "range": "± 3291",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 582,
            "range": "± 106",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "distinct": true,
          "id": "af032dbf59195f5a637c14fd8805f45cce8c8563",
          "message": "try again",
          "timestamp": "2020-11-13T16:47:49-08:00",
          "tree_id": "2c351a9bf2bc6d1fb70754ee19640da3b69df204",
          "url": "https://github.com/tokio-rs/tokio/commit/af032dbf59195f5a637c14fd8805f45cce8c8563"
        },
        "date": 1605314974927,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 199046,
            "range": "± 55572",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 760862,
            "range": "± 157394",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5490742,
            "range": "± 748448",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20486755,
            "range": "± 2300375",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/tokio-rs/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605324750921,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 178128,
            "range": "± 14270",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 707946,
            "range": "± 48048",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5326109,
            "range": "± 635423",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19949182,
            "range": "± 3024767",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/tokio-rs/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605549203912,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 182327,
            "range": "± 35912",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 649727,
            "range": "± 102719",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4047012,
            "range": "± 839128",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18946145,
            "range": "± 2027569",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5cb4c20422a35b51bfba3391744f8bcb54f7581",
          "message": "net: Add send/recv buf size methods to `TcpSocket` (#3145)\n\nThis commit adds `set_{send, recv}_buffer_size` methods to `TcpSocket`\r\nfor setting the size of the TCP send and receive buffers, and `{send,\r\nrecv}_buffer_size` methods for returning the current value. These just\r\ncall into similar methods on `mio`'s `TcpSocket` type, which were added\r\nin tokio-rs/mio#1384.\r\n\r\nRefs: #3082\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-16T12:29:03-08:00",
          "tree_id": "fcf642984a21d04533efad0cdde613d294635c4d",
          "url": "https://github.com/tokio-rs/tokio/commit/f5cb4c20422a35b51bfba3391744f8bcb54f7581"
        },
        "date": 1605558645947,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 191217,
            "range": "± 14072",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 710720,
            "range": "± 43091",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5226983,
            "range": "± 533736",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19521931,
            "range": "± 2271038",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0ebb4154748166a4ba07baa4b424a1c45efd219",
          "message": "sync: add `Notify::notify_waiters` (#3098)\n\nThis PR makes `Notify::notify_waiters` public. The method\r\nalready exists, but it changes the way `notify_waiters`,\r\nis used. Previously in order for the consumer to\r\nregister interest, in a notification triggered by\r\n`notify_waiters`, the `Notified` future had to be\r\npolled. This introduced friction when using the api\r\nas the future had to be pinned before polled.\r\n\r\nThis change introduces a counter that tracks how many\r\ntimes `notified_waiters` has been called. Upon creation of\r\nthe future the number of times is loaded. When first\r\npolled the future compares this number with the count\r\nstate of the `Notify` type. This avoids the need for\r\nregistering the waiter upfront.\r\n\r\nFixes: #3066",
          "timestamp": "2020-11-16T12:49:35-08:00",
          "tree_id": "5ea4d611256290f62baea1a9ffa3333b254181df",
          "url": "https://github.com/tokio-rs/tokio/commit/d0ebb4154748166a4ba07baa4b424a1c45efd219"
        },
        "date": 1605559892943,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 191688,
            "range": "± 39550",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 724625,
            "range": "± 52874",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5279089,
            "range": "± 569953",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21143658,
            "range": "± 1850531",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/tokio-rs/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605570348602,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 179160,
            "range": "± 73737",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 618494,
            "range": "± 150449",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4766918,
            "range": "± 1107083",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19012569,
            "range": "± 4448367",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/tokio-rs/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605636009065,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 214451,
            "range": "± 25711",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 790044,
            "range": "± 167979",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5645160,
            "range": "± 704481",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 22209149,
            "range": "± 3825346",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34fcef258b84d17f8d418b39eb61fa07fa87c390",
          "message": "io: add vectored writes to `AsyncWrite` (#3149)\n\nThis adds `AsyncWrite::poll_write_vectored`, and implements it for\r\n`TcpStream` and `UnixStream`.\r\n\r\nRefs: #3135.",
          "timestamp": "2020-11-18T10:41:47-08:00",
          "tree_id": "98e37fc2d6fa541a9e499331df86ba3d1b7b6e3a",
          "url": "https://github.com/tokio-rs/tokio/commit/34fcef258b84d17f8d418b39eb61fa07fa87c390"
        },
        "date": 1605725037410,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 208313,
            "range": "± 45110",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 736590,
            "range": "± 151516",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5234403,
            "range": "± 831789",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20304040,
            "range": "± 2144433",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/tokio-rs/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605732017041,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 195866,
            "range": "± 16539",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 727582,
            "range": "± 199697",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5428466,
            "range": "± 908457",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20820491,
            "range": "± 4055596",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84",
          "message": "util: fix typo in udp/frame.rs (#3154)",
          "timestamp": "2020-11-20T15:06:14+09:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/tokio-rs/tokio/commit/49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84"
        },
        "date": 1605852489821,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 189192,
            "range": "± 8967",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 702064,
            "range": "± 44051",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5500810,
            "range": "± 1053690",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20865377,
            "range": "± 2857375",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/tokio-rs/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605896473214,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 194070,
            "range": "± 27873",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 694259,
            "range": "± 87017",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5250419,
            "range": "± 1213331",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19153793,
            "range": "± 2780219",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "40d959263bc16771882b2d1c9356f1ec02957c3d",
          "message": "macros: fix unused_braces in generated code (#3404)",
          "timestamp": "2021-01-11T19:20:40+09:00",
          "tree_id": "b7fc026d9435a2c7ce532071d3728ee9c5552c05",
          "url": "https://github.com/Horki/tokio/commit/40d959263bc16771882b2d1c9356f1ec02957c3d"
        },
        "date": 1610399442846,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 155968,
            "range": "± 20233",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 586064,
            "range": "± 53197",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4717417,
            "range": "± 863120",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 17703168,
            "range": "± 2881366",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomas@orozco.fr",
            "name": "Thomas Orozco",
            "username": "krallin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47be928444babf84507a69ac42bb9c9447c78672",
          "message": "sync: yield initial value in WatchStream (#3576)",
          "timestamp": "2021-03-05T21:35:12+01:00",
          "tree_id": "72e3da0a77d2c90ee35e4ff2dd1e16d33f91271b",
          "url": "https://github.com/Horki/tokio/commit/47be928444babf84507a69ac42bb9c9447c78672"
        },
        "date": 1614997445568,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 161274,
            "range": "± 5008",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 616303,
            "range": "± 18439",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4829437,
            "range": "± 1029298",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 17911175,
            "range": "± 2076693",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "704de8c01b331c2651c0cdb0d5ec6b0657e14344",
          "message": "stream: remove duplicate `doc(test(..))` & `cfg_attr` declarations (#3571)",
          "timestamp": "2021-03-06T20:54:28+09:00",
          "tree_id": "05cfb9504112210a7d4e372c30c16177aee4ee59",
          "url": "https://github.com/Horki/tokio/commit/704de8c01b331c2651c0cdb0d5ec6b0657e14344"
        },
        "date": 1615035293070,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 179485,
            "range": "± 28906",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 671083,
            "range": "± 121185",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4252306,
            "range": "± 658199",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19221693,
            "range": "± 1998906",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edfff7551abc24e6d6ee5e0dc8e894cf1309a53d",
          "message": "util: anotate time module as requiring time feature (#3606)\n\nSigned-off-by: Zahari Dichev <zaharidichev@gmail.com>",
          "timestamp": "2021-03-11T16:02:01+01:00",
          "tree_id": "a2a71b1a527cc8cdb62c8b82081da5c9e003bfc3",
          "url": "https://github.com/Horki/tokio/commit/edfff7551abc24e6d6ee5e0dc8e894cf1309a53d"
        },
        "date": 1615489015217,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 193721,
            "range": "± 51457",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 747121,
            "range": "± 92666",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5312131,
            "range": "± 1444100",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20885666,
            "range": "± 2729361",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "724ba348d1754deb29efa70852d0a745f3b0d90e",
          "message": "chore: fix warning from new Rust version (#3647)",
          "timestamp": "2021-03-26T19:22:43+09:00",
          "tree_id": "3714a7b2697ec4f4f53c8275774ef23a92372496",
          "url": "https://github.com/Horki/tokio/commit/724ba348d1754deb29efa70852d0a745f3b0d90e"
        },
        "date": 1616812704647,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 174217,
            "range": "± 29565",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 631446,
            "range": "± 112115",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4092461,
            "range": "± 1058572",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18180059,
            "range": "± 3120002",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6da67b2e612455e16c11967c762ae802c2ac428",
          "message": "sync: add `mpsc::Sender::{reserve_owned, try_reserve_owned}` (#3704)\n\n* sync: add `mpsc::Sender::{reserve_owned, try_reserve_owned}`\r\n\r\n## Motivation\r\n\r\nThe `mpsc::Sender::reserve` method currently returns a permit that borrows\r\nfrom the `Sender`. It would be nice to have a version of it that returns\r\nan owned permit.\r\n\r\n## Solution\r\n\r\nThis branch adds an `OwnedPermit` type and `Sender::{reserve_owned,\r\ntry_reserve_owned}` methods. Unlike the comparable methods on\r\n`Semaphore`, these methods do *not* require an `Arc<Sender>` as the\r\nreceiver; this is because the sender internally reference counts the\r\nchannel and is already cheap to clone. Requiring an `Arc` would simply\r\nadd an unnecessary second layer of reference counting, which is not\r\nideal; instead, the documentation encourages the user to clone the\r\nsender prior to calling `reserve_owned` when necessary.\r\n\r\nSince these methods take the `Sender` by value, they also have the ability\r\nto _return_ the `Sender` from a successful `OwnedPermit::send`. This\r\nallows them to be used without additional clones. Essentially, this is a\r\nvery simple type-level encoding of the sender's state, with the\r\ntransitions\r\n```\r\n      ┌──────┐\r\n ┌───►│Sender├───┐\r\n │    └──────┘   │\r\nsend          reserve\r\n │ ┌───────────┐ │\r\n └─┤OwnedPermit│◄┘\r\n   └───────────┘\r\n```\r\n\r\nAdditionally, I added an `OwnedPermit::release`, which returns the\r\n`Sender` and releases the permit *without* sending a message.\r\n\r\nCloses #3688 \r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2021-04-15T12:55:57-07:00",
          "tree_id": "bf29d9dc513a8d80cadd15021e58c979e5f6d691",
          "url": "https://github.com/Horki/tokio/commit/d6da67b2e612455e16c11967c762ae802c2ac428"
        },
        "date": 1618572354332,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 199444,
            "range": "± 36928",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 759565,
            "range": "± 129183",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5509487,
            "range": "± 1493903",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 22538687,
            "range": "± 3277897",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "distinct": true,
          "id": "af032dbf59195f5a637c14fd8805f45cce8c8563",
          "message": "try again",
          "timestamp": "2020-11-13T16:47:49-08:00",
          "tree_id": "2c351a9bf2bc6d1fb70754ee19640da3b69df204",
          "url": "https://github.com/tokio-rs/tokio/commit/af032dbf59195f5a637c14fd8805f45cce8c8563"
        },
        "date": 1605314979788,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13595,
            "range": "± 2805",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 916,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 548,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13431,
            "range": "± 2349",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 916,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/tokio-rs/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605324754941,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13492,
            "range": "± 3133",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 950,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 611,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13849,
            "range": "± 3588",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 956,
            "range": "± 196",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/tokio-rs/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605549191489,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15074,
            "range": "± 3954",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1104,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 639,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15715,
            "range": "± 5843",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1077,
            "range": "± 260",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5cb4c20422a35b51bfba3391744f8bcb54f7581",
          "message": "net: Add send/recv buf size methods to `TcpSocket` (#3145)\n\nThis commit adds `set_{send, recv}_buffer_size` methods to `TcpSocket`\r\nfor setting the size of the TCP send and receive buffers, and `{send,\r\nrecv}_buffer_size` methods for returning the current value. These just\r\ncall into similar methods on `mio`'s `TcpSocket` type, which were added\r\nin tokio-rs/mio#1384.\r\n\r\nRefs: #3082\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-16T12:29:03-08:00",
          "tree_id": "fcf642984a21d04533efad0cdde613d294635c4d",
          "url": "https://github.com/tokio-rs/tokio/commit/f5cb4c20422a35b51bfba3391744f8bcb54f7581"
        },
        "date": 1605558672781,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16250,
            "range": "± 6549",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1148,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 642,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16877,
            "range": "± 5879",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1120,
            "range": "± 177",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0ebb4154748166a4ba07baa4b424a1c45efd219",
          "message": "sync: add `Notify::notify_waiters` (#3098)\n\nThis PR makes `Notify::notify_waiters` public. The method\r\nalready exists, but it changes the way `notify_waiters`,\r\nis used. Previously in order for the consumer to\r\nregister interest, in a notification triggered by\r\n`notify_waiters`, the `Notified` future had to be\r\npolled. This introduced friction when using the api\r\nas the future had to be pinned before polled.\r\n\r\nThis change introduces a counter that tracks how many\r\ntimes `notified_waiters` has been called. Upon creation of\r\nthe future the number of times is loaded. When first\r\npolled the future compares this number with the count\r\nstate of the `Notify` type. This avoids the need for\r\nregistering the waiter upfront.\r\n\r\nFixes: #3066",
          "timestamp": "2020-11-16T12:49:35-08:00",
          "tree_id": "5ea4d611256290f62baea1a9ffa3333b254181df",
          "url": "https://github.com/tokio-rs/tokio/commit/d0ebb4154748166a4ba07baa4b424a1c45efd219"
        },
        "date": 1605559887160,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14761,
            "range": "± 6659",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1111,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 572,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14899,
            "range": "± 6462",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1040,
            "range": "± 180",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/tokio-rs/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605570353023,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 17403,
            "range": "± 5100",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1046,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 596,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 17072,
            "range": "± 5572",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1016,
            "range": "± 97",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/tokio-rs/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605635995329,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14052,
            "range": "± 2557",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1066,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 635,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14784,
            "range": "± 3824",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1064,
            "range": "± 97",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34fcef258b84d17f8d418b39eb61fa07fa87c390",
          "message": "io: add vectored writes to `AsyncWrite` (#3149)\n\nThis adds `AsyncWrite::poll_write_vectored`, and implements it for\r\n`TcpStream` and `UnixStream`.\r\n\r\nRefs: #3135.",
          "timestamp": "2020-11-18T10:41:47-08:00",
          "tree_id": "98e37fc2d6fa541a9e499331df86ba3d1b7b6e3a",
          "url": "https://github.com/tokio-rs/tokio/commit/34fcef258b84d17f8d418b39eb61fa07fa87c390"
        },
        "date": 1605725013037,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16289,
            "range": "± 6362",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1138,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 641,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14883,
            "range": "± 4548",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1141,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/tokio-rs/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605732024626,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15022,
            "range": "± 5746",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1023,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 610,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14804,
            "range": "± 4029",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1050,
            "range": "± 109",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84",
          "message": "util: fix typo in udp/frame.rs (#3154)",
          "timestamp": "2020-11-20T15:06:14+09:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/tokio-rs/tokio/commit/49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84"
        },
        "date": 1605852504046,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15976,
            "range": "± 6358",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1140,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 657,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16059,
            "range": "± 4105",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1126,
            "range": "± 127",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/tokio-rs/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605896460411,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 19438,
            "range": "± 3548",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 774,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 504,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 18618,
            "range": "± 5481",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 886,
            "range": "± 362",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "40d959263bc16771882b2d1c9356f1ec02957c3d",
          "message": "macros: fix unused_braces in generated code (#3404)",
          "timestamp": "2021-01-11T19:20:40+09:00",
          "tree_id": "b7fc026d9435a2c7ce532071d3728ee9c5552c05",
          "url": "https://github.com/Horki/tokio/commit/40d959263bc16771882b2d1c9356f1ec02957c3d"
        },
        "date": 1610399442891,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15512,
            "range": "± 4400",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1092,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 650,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15269,
            "range": "± 5614",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1090,
            "range": "± 48",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomas@orozco.fr",
            "name": "Thomas Orozco",
            "username": "krallin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47be928444babf84507a69ac42bb9c9447c78672",
          "message": "sync: yield initial value in WatchStream (#3576)",
          "timestamp": "2021-03-05T21:35:12+01:00",
          "tree_id": "72e3da0a77d2c90ee35e4ff2dd1e16d33f91271b",
          "url": "https://github.com/Horki/tokio/commit/47be928444babf84507a69ac42bb9c9447c78672"
        },
        "date": 1614997460429,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14513,
            "range": "± 5531",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1042,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 640,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14290,
            "range": "± 3613",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1062,
            "range": "± 126",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "704de8c01b331c2651c0cdb0d5ec6b0657e14344",
          "message": "stream: remove duplicate `doc(test(..))` & `cfg_attr` declarations (#3571)",
          "timestamp": "2021-03-06T20:54:28+09:00",
          "tree_id": "05cfb9504112210a7d4e372c30c16177aee4ee59",
          "url": "https://github.com/Horki/tokio/commit/704de8c01b331c2651c0cdb0d5ec6b0657e14344"
        },
        "date": 1615035311686,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15414,
            "range": "± 6092",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 950,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 571,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14632,
            "range": "± 5909",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 868,
            "range": "± 281",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edfff7551abc24e6d6ee5e0dc8e894cf1309a53d",
          "message": "util: anotate time module as requiring time feature (#3606)\n\nSigned-off-by: Zahari Dichev <zaharidichev@gmail.com>",
          "timestamp": "2021-03-11T16:02:01+01:00",
          "tree_id": "a2a71b1a527cc8cdb62c8b82081da5c9e003bfc3",
          "url": "https://github.com/Horki/tokio/commit/edfff7551abc24e6d6ee5e0dc8e894cf1309a53d"
        },
        "date": 1615488985947,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15017,
            "range": "± 5243",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 920,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 533,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 16088,
            "range": "± 6059",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 882,
            "range": "± 296",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "724ba348d1754deb29efa70852d0a745f3b0d90e",
          "message": "chore: fix warning from new Rust version (#3647)",
          "timestamp": "2021-03-26T19:22:43+09:00",
          "tree_id": "3714a7b2697ec4f4f53c8275774ef23a92372496",
          "url": "https://github.com/Horki/tokio/commit/724ba348d1754deb29efa70852d0a745f3b0d90e"
        },
        "date": 1616812690305,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13760,
            "range": "± 4796",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 988,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 552,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13580,
            "range": "± 3036",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1002,
            "range": "± 314",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6da67b2e612455e16c11967c762ae802c2ac428",
          "message": "sync: add `mpsc::Sender::{reserve_owned, try_reserve_owned}` (#3704)\n\n* sync: add `mpsc::Sender::{reserve_owned, try_reserve_owned}`\r\n\r\n## Motivation\r\n\r\nThe `mpsc::Sender::reserve` method currently returns a permit that borrows\r\nfrom the `Sender`. It would be nice to have a version of it that returns\r\nan owned permit.\r\n\r\n## Solution\r\n\r\nThis branch adds an `OwnedPermit` type and `Sender::{reserve_owned,\r\ntry_reserve_owned}` methods. Unlike the comparable methods on\r\n`Semaphore`, these methods do *not* require an `Arc<Sender>` as the\r\nreceiver; this is because the sender internally reference counts the\r\nchannel and is already cheap to clone. Requiring an `Arc` would simply\r\nadd an unnecessary second layer of reference counting, which is not\r\nideal; instead, the documentation encourages the user to clone the\r\nsender prior to calling `reserve_owned` when necessary.\r\n\r\nSince these methods take the `Sender` by value, they also have the ability\r\nto _return_ the `Sender` from a successful `OwnedPermit::send`. This\r\nallows them to be used without additional clones. Essentially, this is a\r\nvery simple type-level encoding of the sender's state, with the\r\ntransitions\r\n```\r\n      ┌──────┐\r\n ┌───►│Sender├───┐\r\n │    └──────┘   │\r\nsend          reserve\r\n │ ┌───────────┐ │\r\n └─┤OwnedPermit│◄┘\r\n   └───────────┘\r\n```\r\n\r\nAdditionally, I added an `OwnedPermit::release`, which returns the\r\n`Sender` and releases the permit *without* sending a message.\r\n\r\nCloses #3688 \r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2021-04-15T12:55:57-07:00",
          "tree_id": "bf29d9dc513a8d80cadd15021e58c979e5f6d691",
          "url": "https://github.com/Horki/tokio/commit/d6da67b2e612455e16c11967c762ae802c2ac428"
        },
        "date": 1618572365899,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14113,
            "range": "± 4410",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 988,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 747,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14091,
            "range": "± 4545",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 982,
            "range": "± 129",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "distinct": true,
          "id": "af032dbf59195f5a637c14fd8805f45cce8c8563",
          "message": "try again",
          "timestamp": "2020-11-13T16:47:49-08:00",
          "tree_id": "2c351a9bf2bc6d1fb70754ee19640da3b69df204",
          "url": "https://github.com/tokio-rs/tokio/commit/af032dbf59195f5a637c14fd8805f45cce8c8563"
        },
        "date": 1605314997643,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6701051,
            "range": "± 1798407",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6357946,
            "range": "± 1969273",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6190077,
            "range": "± 1989686",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 588,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 645,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 604,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 48623,
            "range": "± 4125",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 901,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1057858,
            "range": "± 197528",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 768305,
            "range": "± 105579",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97c2c4203cd7c42960cac895987c43a17dff052e",
          "message": "chore: automate running benchmarks (#3140)\n\nUses Github actions to run benchmarks.",
          "timestamp": "2020-11-13T19:30:52-08:00",
          "tree_id": "f4a3cfebafb7afee68d6d4de1748daddcfc070c6",
          "url": "https://github.com/tokio-rs/tokio/commit/97c2c4203cd7c42960cac895987c43a17dff052e"
        },
        "date": 1605324759979,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6516564,
            "range": "± 2673764",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6603280,
            "range": "± 1010301",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5967313,
            "range": "± 2223714",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 604,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 606,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 604,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 45361,
            "range": "± 1799",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 835,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1120543,
            "range": "± 16131",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 800918,
            "range": "± 22116",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "masnagam@gmail.com",
            "name": "masnagam",
            "username": "masnagam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e39c9b818eb8af064bb9f45f47e3cfc6593de95",
          "message": "net: restore TcpStream::{poll_read_ready, poll_write_ready} (#2743)",
          "timestamp": "2020-11-16T09:51:06-08:00",
          "tree_id": "2222dd2f8638fb64f228badef84814d2f4079a82",
          "url": "https://github.com/tokio-rs/tokio/commit/4e39c9b818eb8af064bb9f45f47e3cfc6593de95"
        },
        "date": 1605549207449,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6803300,
            "range": "± 2440677",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6651924,
            "range": "± 1480231",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6405364,
            "range": "± 2450565",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 668,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 667,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 667,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 50192,
            "range": "± 929",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 799,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1118325,
            "range": "± 21375",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 816811,
            "range": "± 316994",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5cb4c20422a35b51bfba3391744f8bcb54f7581",
          "message": "net: Add send/recv buf size methods to `TcpSocket` (#3145)\n\nThis commit adds `set_{send, recv}_buffer_size` methods to `TcpSocket`\r\nfor setting the size of the TCP send and receive buffers, and `{send,\r\nrecv}_buffer_size` methods for returning the current value. These just\r\ncall into similar methods on `mio`'s `TcpSocket` type, which were added\r\nin tokio-rs/mio#1384.\r\n\r\nRefs: #3082\r\n\r\nSigned-off-by: Eliza Weisman <eliza@buoyant.io>",
          "timestamp": "2020-11-16T12:29:03-08:00",
          "tree_id": "fcf642984a21d04533efad0cdde613d294635c4d",
          "url": "https://github.com/tokio-rs/tokio/commit/f5cb4c20422a35b51bfba3391744f8bcb54f7581"
        },
        "date": 1605558683599,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6754053,
            "range": "± 2766922",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6486377,
            "range": "± 1920826",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6544483,
            "range": "± 3004414",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 834,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 842,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 845,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 57023,
            "range": "± 7455",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1048,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1072969,
            "range": "± 131055",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 764003,
            "range": "± 148570",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0ebb4154748166a4ba07baa4b424a1c45efd219",
          "message": "sync: add `Notify::notify_waiters` (#3098)\n\nThis PR makes `Notify::notify_waiters` public. The method\r\nalready exists, but it changes the way `notify_waiters`,\r\nis used. Previously in order for the consumer to\r\nregister interest, in a notification triggered by\r\n`notify_waiters`, the `Notified` future had to be\r\npolled. This introduced friction when using the api\r\nas the future had to be pinned before polled.\r\n\r\nThis change introduces a counter that tracks how many\r\ntimes `notified_waiters` has been called. Upon creation of\r\nthe future the number of times is loaded. When first\r\npolled the future compares this number with the count\r\nstate of the `Notify` type. This avoids the need for\r\nregistering the waiter upfront.\r\n\r\nFixes: #3066",
          "timestamp": "2020-11-16T12:49:35-08:00",
          "tree_id": "5ea4d611256290f62baea1a9ffa3333b254181df",
          "url": "https://github.com/tokio-rs/tokio/commit/d0ebb4154748166a4ba07baa4b424a1c45efd219"
        },
        "date": 1605559901295,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5738427,
            "range": "± 2801992",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5782978,
            "range": "± 1550441",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 4938344,
            "range": "± 2609337",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 646,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 616,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 656,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 52459,
            "range": "± 9246",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 787,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 876850,
            "range": "± 128609",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 630049,
            "range": "± 83042",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ea23076503c5151d68a781a3d91823396c82949",
          "message": "net: add UdpSocket readiness and non-blocking ops (#3138)\n\nAdds `ready()`, `readable()`, and `writable()` async methods for waiting\r\nfor socket readiness. Adds `try_send`, `try_send_to`, `try_recv`, and\r\n`try_recv_from` for performing non-blocking operations on the socket.\r\n\r\nThis is the UDP equivalent of #3130.",
          "timestamp": "2020-11-16T15:44:01-08:00",
          "tree_id": "1e49d7dc0bb3cee6271133d942ba49c5971fde29",
          "url": "https://github.com/tokio-rs/tokio/commit/0ea23076503c5151d68a781a3d91823396c82949"
        },
        "date": 1605570390864,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7194053,
            "range": "± 2331201",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6928458,
            "range": "± 1519084",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6464793,
            "range": "± 2430089",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 923,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 911,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 920,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 66036,
            "range": "± 6878",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1092,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1172665,
            "range": "± 151747",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 792689,
            "range": "± 98126",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9832640+zekisherif@users.noreply.github.com",
            "name": "Zeki Sherif",
            "username": "zekisherif"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d11aa866837eea50a6f1e0ef7e24846a653cbf1",
          "message": "net: add SO_LINGER get/set to TcpStream (#3143)",
          "timestamp": "2020-11-17T09:58:00-08:00",
          "tree_id": "ca0d5edc04a29bbe6e2906c760a22908e032a4c9",
          "url": "https://github.com/tokio-rs/tokio/commit/7d11aa866837eea50a6f1e0ef7e24846a653cbf1"
        },
        "date": 1605636006243,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6386215,
            "range": "± 2561315",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6223133,
            "range": "± 1216930",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5641856,
            "range": "± 2812615",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 782,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 771,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 748,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 56412,
            "range": "± 10956",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 968,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1047860,
            "range": "± 157168",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 699818,
            "range": "± 128883",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34fcef258b84d17f8d418b39eb61fa07fa87c390",
          "message": "io: add vectored writes to `AsyncWrite` (#3149)\n\nThis adds `AsyncWrite::poll_write_vectored`, and implements it for\r\n`TcpStream` and `UnixStream`.\r\n\r\nRefs: #3135.",
          "timestamp": "2020-11-18T10:41:47-08:00",
          "tree_id": "98e37fc2d6fa541a9e499331df86ba3d1b7b6e3a",
          "url": "https://github.com/tokio-rs/tokio/commit/34fcef258b84d17f8d418b39eb61fa07fa87c390"
        },
        "date": 1605725015672,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6265900,
            "range": "± 1903787",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5980619,
            "range": "± 1425562",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5608356,
            "range": "± 1837833",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 553,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 551,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 551,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 32381,
            "range": "± 3229",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 747,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 952719,
            "range": "± 1921",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 690909,
            "range": "± 15989",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "479c545c20b2cb44a8f09600733adc8c8dcb5aa0",
          "message": "chore: prepare v0.3.4 release (#3152)",
          "timestamp": "2020-11-18T12:38:13-08:00",
          "tree_id": "df6daba6b2f595de47ada2dd2f518475669ab919",
          "url": "https://github.com/tokio-rs/tokio/commit/479c545c20b2cb44a8f09600733adc8c8dcb5aa0"
        },
        "date": 1605732057947,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6429590,
            "range": "± 1921395",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6087351,
            "range": "± 1216119",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5570765,
            "range": "± 1754220",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 494,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 489,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 518,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 39959,
            "range": "± 4920",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 720,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 973766,
            "range": "± 210658",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 681859,
            "range": "± 151210",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cssivision@gmail.com",
            "name": "cssivision",
            "username": "cssivision"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84",
          "message": "util: fix typo in udp/frame.rs (#3154)",
          "timestamp": "2020-11-20T15:06:14+09:00",
          "tree_id": "f09954c70e26336bdb1bc525f832916c2d7037bf",
          "url": "https://github.com/tokio-rs/tokio/commit/49abfdb2ac7f564c638ef99b973b1ab7a2b7ec84"
        },
        "date": 1605852504276,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6976499,
            "range": "± 2320668",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7088300,
            "range": "± 1690727",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6373230,
            "range": "± 2466055",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 805,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 803,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 803,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 49997,
            "range": "± 1458",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 871,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1147945,
            "range": "± 6018",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 836883,
            "range": "± 6205",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/tokio-rs/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605896470436,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6396651,
            "range": "± 2089250",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6210787,
            "range": "± 1599888",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5777463,
            "range": "± 2201398",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 876,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 879,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 877,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 55799,
            "range": "± 2028",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1076,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1092314,
            "range": "± 31319",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 774222,
            "range": "± 43076",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "te316e89@gmail.com",
            "name": "Taiki Endo",
            "username": "taiki-e"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "40d959263bc16771882b2d1c9356f1ec02957c3d",
          "message": "macros: fix unused_braces in generated code (#3404)",
          "timestamp": "2021-01-11T19:20:40+09:00",
          "tree_id": "b7fc026d9435a2c7ce532071d3728ee9c5552c05",
          "url": "https://github.com/Horki/tokio/commit/40d959263bc16771882b2d1c9356f1ec02957c3d"
        },
        "date": 1610399471446,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6297263,
            "range": "± 2779452",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6088154,
            "range": "± 1821962",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6270362,
            "range": "± 2359838",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 560,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 563,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 575,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 75913,
            "range": "± 8895",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1289,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1013083,
            "range": "± 170415",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 711608,
            "range": "± 157911",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "thomas@orozco.fr",
            "name": "Thomas Orozco",
            "username": "krallin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47be928444babf84507a69ac42bb9c9447c78672",
          "message": "sync: yield initial value in WatchStream (#3576)",
          "timestamp": "2021-03-05T21:35:12+01:00",
          "tree_id": "72e3da0a77d2c90ee35e4ff2dd1e16d33f91271b",
          "url": "https://github.com/Horki/tokio/commit/47be928444babf84507a69ac42bb9c9447c78672"
        },
        "date": 1614997477249,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6668500,
            "range": "± 2521125",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6135089,
            "range": "± 2011450",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5709118,
            "range": "± 2735000",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 542,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 541,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 539,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 78453,
            "range": "± 9285",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1313,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1044960,
            "range": "± 118048",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 769399,
            "range": "± 92305",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "704de8c01b331c2651c0cdb0d5ec6b0657e14344",
          "message": "stream: remove duplicate `doc(test(..))` & `cfg_attr` declarations (#3571)",
          "timestamp": "2021-03-06T20:54:28+09:00",
          "tree_id": "05cfb9504112210a7d4e372c30c16177aee4ee59",
          "url": "https://github.com/Horki/tokio/commit/704de8c01b331c2651c0cdb0d5ec6b0657e14344"
        },
        "date": 1615035365227,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7410672,
            "range": "± 3999483",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 7355131,
            "range": "± 2887010",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6561324,
            "range": "± 3571630",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 964,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 946,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 946,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 143194,
            "range": "± 30183",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1844,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1195974,
            "range": "± 248122",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 841926,
            "range": "± 177044",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zaharidichev@gmail.com",
            "name": "Zahari Dichev",
            "username": "zaharidichev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edfff7551abc24e6d6ee5e0dc8e894cf1309a53d",
          "message": "util: anotate time module as requiring time feature (#3606)\n\nSigned-off-by: Zahari Dichev <zaharidichev@gmail.com>",
          "timestamp": "2021-03-11T16:02:01+01:00",
          "tree_id": "a2a71b1a527cc8cdb62c8b82081da5c9e003bfc3",
          "url": "https://github.com/Horki/tokio/commit/edfff7551abc24e6d6ee5e0dc8e894cf1309a53d"
        },
        "date": 1615489051594,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7019022,
            "range": "± 2480467",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6471366,
            "range": "± 2056963",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6603263,
            "range": "± 2550319",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 862,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 838,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 851,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 135583,
            "range": "± 16887",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1815,
            "range": "± 422",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1107776,
            "range": "± 118536",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 737434,
            "range": "± 167247",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alice@ryhl.io",
            "name": "Alice Ryhl",
            "username": "Darksonn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "724ba348d1754deb29efa70852d0a745f3b0d90e",
          "message": "chore: fix warning from new Rust version (#3647)",
          "timestamp": "2021-03-26T19:22:43+09:00",
          "tree_id": "3714a7b2697ec4f4f53c8275774ef23a92372496",
          "url": "https://github.com/Horki/tokio/commit/724ba348d1754deb29efa70852d0a745f3b0d90e"
        },
        "date": 1616812739522,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6533351,
            "range": "± 2037316",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6630026,
            "range": "± 1994507",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5819822,
            "range": "± 3540223",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 794,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 835,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 781,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 135547,
            "range": "± 19108",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1576,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 984869,
            "range": "± 188217",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 716208,
            "range": "± 82657",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}