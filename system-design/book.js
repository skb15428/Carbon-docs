/* Carbon Docs · System Design book data.
   volumes[].modules[].topics[] = {n: topic number or case id, t: title, c: what it covers}.
   pages: topic number -> page file, relative to this folder (system-design/).
   code: short id used in links (#sd-18); base: this folder, relative to the site root. */
(window.BOOKS=window.BOOKS||{})['system-design']={
 "id": "system-design",
 "code": "sd",
 "base": "system-design/",
 "title": "System Design",
 "blurb": "From how a single server works to designing Uber, Google Docs and trading systems: fundamentals, deeper topics, then high-level and low-level case studies.",
 "href": "system-design/index.html",
 "volumes": [
  {
   "id": "volume-1",
   "name": "Volume 1",
   "title": "Fundamentals",
   "range": "Topics 1–48",
   "modules": [
    {
     "id": "1.1",
     "title": "How a computer runs your code",
     "topics": [
      {
       "n": "1",
       "t": "CPU, memory and disk",
       "c": "The chef, the counter and the fridge; why RAM is fast and disk is slow; latency numbers every engineer should know (L1 cache, RAM, SSD, network, other continent)"
      },
      {
       "n": "2",
       "t": "Processes and threads (basics)",
       "c": "What a process is, what a thread is, shared memory, thread lifecycle (new, runnable, blocked, done)"
      },
      {
       "n": "3",
       "t": "Concurrency, parallelism, sync and async",
       "c": "The waiter analogy; CPU-bound vs I/O-bound work; what an event loop is"
      }
     ]
    },
    {
     "id": "1.2",
     "title": "How computers talk",
     "topics": [
      {
       "n": "4",
       "t": "Client and server",
       "c": "Who asks and who answers; request and response"
      },
      {
       "n": "5",
       "t": "IP addresses, ports and DNS",
       "c": "What happens when you type a website address; DNS lookups and caching"
      },
      {
       "n": "6",
       "t": "TCP vs UDP",
       "c": "Reliable vs fast; the TCP handshake; when UDP is the right choice"
      },
      {
       "n": "7",
       "t": "TLS and HTTPS",
       "c": "Encryption, certificates, the cost of the TLS handshake"
      },
      {
       "n": "8",
       "t": "HTTP basics",
       "c": "Methods, status codes, headers, cookies, keep-alive"
      },
      {
       "n": "9",
       "t": "HTTP/1.1 vs HTTP/2 vs HTTP/3 (QUIC)",
       "c": "Multiplexing, head-of-line blocking, why HTTP/3 runs on UDP"
      },
      {
       "n": "10",
       "t": "Sockets and connections",
       "c": "File descriptors, TIME_WAIT and CLOSE_WAIT, port exhaustion, reusing connections"
      },
      {
       "n": "11",
       "t": "Latency, throughput and percentiles",
       "c": "Round-trip time, bandwidth, p50, p95 and p99, why the slowest requests matter"
      }
     ]
    },
    {
     "id": "1.3",
     "title": "APIs",
     "topics": [
      {
       "n": "12",
       "t": "REST and JSON",
       "c": "Resources and verbs, status codes, pagination, filtering, versioning"
      },
      {
       "n": "13",
       "t": "gRPC and GraphQL",
       "c": "Protocol buffers, streaming, when each beats REST"
      },
      {
       "n": "14",
       "t": "Real-time updates",
       "c": "Short polling, long polling, WebSockets, Server-Sent Events (how LLM tokens stream)"
      },
      {
       "n": "15",
       "t": "API gateway and backend-for-frontend",
       "c": "Auth, routing and rate limits at the front door"
      },
      {
       "n": "16",
       "t": "Idempotency and safe retries",
       "c": "Idempotency keys; why pressing \"Pay\" twice must charge once"
      }
     ]
    },
    {
     "id": "1.4",
     "title": "Napkin maths",
     "topics": [
      {
       "n": "17",
       "t": "Back-of-the-envelope estimation",
       "c": "Daily users to requests per second, peak factor, storage, bandwidth, servers needed, headroom"
      }
     ]
    },
    {
     "id": "1.5",
     "title": "From one server to many",
     "topics": [
      {
       "n": "18",
       "t": "Vertical vs horizontal scaling",
       "c": "A bigger kitchen or more kitchens; limits of each"
      },
      {
       "n": "19",
       "t": "Stateless services and sessions",
       "c": "Where session data lives; sticky sessions and why to avoid them"
      },
      {
       "n": "20",
       "t": "Load balancers",
       "c": "L4 vs L7, round robin, least connections, IP hash, health checks, long-lived connections"
      },
      {
       "n": "21",
       "t": "Reverse proxies",
       "c": "Nginx, SSL termination, compression, serving static files"
      },
      {
       "n": "22",
       "t": "Caching basics",
       "c": "Browser, CDN, app and database caches; TTL; hit ratio; Redis introduction"
      },
      {
       "n": "23",
       "t": "CDNs",
       "c": "Edge locations, push vs pull, basic cache invalidation"
      },
      {
       "n": "24",
       "t": "Rate limiting",
       "c": "Token bucket, leaky bucket, fixed and sliding windows, where to enforce limits"
      }
     ]
    },
    {
     "id": "1.6",
     "title": "Storing data",
     "topics": [
      {
       "n": "25",
       "t": "Databases 101",
       "c": "Tables, primary and foreign keys, SQL, joins, turning nouns into tables"
      },
      {
       "n": "26",
       "t": "Normalization and denormalization",
       "c": "1NF to 3NF, and when to break the rules for faster reads"
      },
      {
       "n": "27",
       "t": "SQL vs NoSQL",
       "c": "Key-value, document, wide-column, graph and time-series stores; how to choose"
      },
      {
       "n": "28",
       "t": "Indexes (basics)",
       "c": "The book-index idea, B-trees, composite indexes, the cost on writes"
      },
      {
       "n": "29",
       "t": "Transactions and ACID",
       "c": "All-or-nothing changes; what each letter guarantees"
      },
      {
       "n": "30",
       "t": "Locks and race conditions (basics)",
       "c": "Pessimistic vs optimistic locking, SELECT FOR UPDATE, version columns"
      },
      {
       "n": "31",
       "t": "Replication (basics)",
       "c": "Primary and replicas, read replicas, replication lag"
      },
      {
       "n": "32",
       "t": "Partitioning and sharding (basics)",
       "c": "Vertical vs horizontal partitioning, hash vs range sharding"
      },
      {
       "n": "33",
       "t": "Consistent hashing (basics)",
       "c": "The hash ring, and why \"key mod N\" breaks when servers change"
      },
      {
       "n": "34",
       "t": "Object, block and file storage",
       "c": "S3 and blobs, presigned URLs"
      },
      {
       "n": "35",
       "t": "Search basics",
       "c": "The inverted index, full-text search, Elasticsearch"
      }
     ]
    },
    {
     "id": "1.7",
     "title": "How services talk to each other",
     "topics": [
      {
       "n": "36",
       "t": "Monolith vs microservices",
       "c": "When to split a system; service discovery basics"
      },
      {
       "n": "37",
       "t": "Message queues",
       "c": "Producers, consumers, workers, retries, dead-letter queues, the \"shock absorber\" pattern"
      },
      {
       "n": "38",
       "t": "Pub/sub and event streams",
       "c": "Kafka basics: topics, partitions, consumer groups"
      },
      {
       "n": "39",
       "t": "Batch vs stream processing",
       "c": "Washing all the dishes at night, or each plate as it's used"
      }
     ]
    },
    {
     "id": "1.8",
     "title": "Keeping it running",
     "topics": [
      {
       "n": "40",
       "t": "Availability and redundancy",
       "c": "SLAs and \"nines\", single points of failure, failover (active-passive, active-active)"
      },
      {
       "n": "41",
       "t": "Timeouts, retries and circuit breakers (basics)",
       "c": "Exponential backoff with jitter; stopping a failure from spreading"
      },
      {
       "n": "42",
       "t": "Observability",
       "c": "Logs, metrics and traces; SLIs, SLOs and error budgets"
      },
      {
       "n": "43",
       "t": "Docker",
       "c": "Images and containers, and why they exist"
      },
      {
       "n": "44",
       "t": "Kubernetes basics",
       "c": "Pods, deployments, services, requests vs limits, autoscaling"
      },
      {
       "n": "45",
       "t": "CI/CD and deployments",
       "c": "Automated tests, rolling, blue-green and canary releases, feature flags, rollbacks"
      },
      {
       "n": "46",
       "t": "Security basics",
       "c": "Login (sessions, JWT, OAuth2, SSO), permissions (roles), HTTPS, encryption at rest, secrets, the most common web attacks"
      }
     ]
    },
    {
     "id": "1.9",
     "title": "The interview method",
     "topics": [
      {
       "n": "47",
       "t": "How a system design interview runs",
       "c": "Functional and non-functional requirements, estimates, API, data model, high-level design, deep dives, wrap-up; HLD vs LLD"
      },
      {
       "n": "48",
       "t": "Talking about trade-offs",
       "c": "Consistency vs availability, latency vs cost, build vs buy; how to say \"it depends, because…\"; drawing clear diagrams"
      }
     ]
    }
   ]
  },
  {
   "id": "volume-2",
   "name": "Volume 2",
   "title": "Deeper topics",
   "range": "Topics 49–110",
   "modules": [
    {
     "id": "2.1",
     "title": "Concurrency and OS internals",
     "topics": [
      {
       "n": "49",
       "t": "Processes vs threads in depth",
       "c": "Heap vs stack, context-switch cost, TLB flushes, CPU thrashing"
      },
      {
       "n": "50",
       "t": "Creating and running threads",
       "c": "Thread, Runnable and Callable; start() vs run(); Future and CompletableFuture"
      },
      {
       "n": "51",
       "t": "Mutex, semaphore and monitors",
       "c": "synchronized, volatile, atomic variables, ReentrantLock, counting semaphores"
      },
      {
       "n": "52",
       "t": "Deadlocks",
       "c": "The four Coffman conditions, prevention, Banker's algorithm, dining philosophers"
      },
      {
       "n": "53",
       "t": "Lock-free programming",
       "c": "Compare-and-swap (CAS) at the CPU level, the ABA problem"
      },
      {
       "n": "54",
       "t": "Thread pools and executors",
       "c": "Pool sizing for CPU-bound vs I/O-bound work, starvation, shutting down cleanly"
      },
      {
       "n": "55",
       "t": "Async I/O and event loops",
       "c": "epoll and kqueue, non-blocking I/O, what happens when you block inside async code"
      },
      {
       "n": "56",
       "t": "Python's GIL and framework concurrency",
       "c": "FastAPI's event loop vs Spring Boot's thread-per-request, event-loop starvation, workers per core"
      },
      {
       "n": "57",
       "t": "Advanced primitives",
       "c": "CountDownLatch, CyclicBarrier, ReadWriteLock"
      },
      {
       "n": "58",
       "t": "Thread communication and producer-consumer",
       "c": "wait/notify, condition variables, blocking queues, concurrent collections"
      },
      {
       "n": "59",
       "t": "Multithreading patterns",
       "c": "Double-checked locking, thread-safe singleton, memory barriers"
      },
      {
       "n": "60",
       "t": "Readers-writers problem",
       "c": "Lock contention, writer starvation, writer-priority locks"
      },
      {
       "n": "61",
       "t": "Green threads and goroutines",
       "c": "M:N scheduling, why goroutines are cheap"
      },
      {
       "n": "62",
       "t": "CPU caches and false sharing",
       "c": "Cache lines, the MESI protocol, padding"
      },
      {
       "n": "63",
       "t": "Concurrency practice set",
       "c": "Print zero-even-odd, multithreaded FizzBuzz, bounded blocking queue, dining philosophers, multithreaded web crawler"
      },
      {
       "n": "64",
       "t": "Concurrency mock interviews",
       "c": "Concurrent task scheduler, thread-safe token-bucket rate limiter, concurrent hash map (lock striping vs CAS)"
      }
     ]
    },
    {
     "id": "2.2",
     "title": "Database internals",
     "topics": [
      {
       "n": "65",
       "t": "How a relational database stores data",
       "c": "Pages, buffer pool, write-ahead log (WAL), how durability is guaranteed"
      },
      {
       "n": "66",
       "t": "Isolation levels and anomalies",
       "c": "Read uncommitted to serializable; dirty reads, phantoms, write skew"
      },
      {
       "n": "67",
       "t": "MVCC",
       "c": "How Postgres and MySQL read without blocking writers; cleaning up old row versions"
      },
      {
       "n": "68",
       "t": "Indexes in depth",
       "c": "B+ trees, clustered vs non-clustered, covering indexes, disk reads per lookup"
      },
      {
       "n": "69",
       "t": "Storage engines",
       "c": "LSM-trees, memtables, SSTables, compaction, Bloom filters, write amplification"
      },
      {
       "n": "70",
       "t": "Query optimization",
       "c": "Reading EXPLAIN plans, N+1 queries, choosing indexes, pagination at scale"
      },
      {
       "n": "71",
       "t": "Connection pooling and database performance",
       "c": "Pool exhaustion, PgBouncer, connection storms from serverless functions"
      },
      {
       "n": "72",
       "t": "Replication in depth",
       "c": "Single-leader, multi-leader, leaderless; quorums (N, R, W); conflict resolution"
      },
      {
       "n": "73",
       "t": "Sharding in depth",
       "c": "Routing, hot shards and the celebrity problem, resharding, cross-shard queries"
      },
      {
       "n": "74",
       "t": "Consistent hashing in depth",
       "c": "Virtual nodes, data skew"
      },
      {
       "n": "75",
       "t": "NoSQL in depth",
       "c": "Cassandra, DynamoDB, MongoDB, Neo4j, time-series databases; matching each to a workload"
      },
      {
       "n": "76",
       "t": "Geospatial indexing",
       "c": "Geohash, quadtree, S2"
      },
      {
       "n": "77",
       "t": "Search internals",
       "c": "Lucene, sharding an inverted index, relevance scoring"
      },
      {
       "n": "78",
       "t": "Object storage and CDNs in depth",
       "c": "CDN invalidation, signed URLs, media pipelines, multipart upload"
      }
     ]
    },
    {
     "id": "2.3",
     "title": "Caching in depth",
     "topics": [
      {
       "n": "79",
       "t": "Caching patterns",
       "c": "Cache-aside, read-through, write-through, write-back, write-around"
      },
      {
       "n": "80",
       "t": "Eviction and invalidation",
       "c": "LRU, LFU, TTL; keeping cache and database consistent"
      },
      {
       "n": "81",
       "t": "Cache failures",
       "c": "Thundering herd, avalanche, penetration, breakdown; request coalescing, Bloom filters, jittered TTLs"
      },
      {
       "n": "82",
       "t": "Redis in depth",
       "c": "Data structures (sorted sets, hashes, streams), persistence (RDB, AOF), clustering, Lua scripts for atomic steps"
      }
     ]
    },
    {
     "id": "2.4",
     "title": "Distributed systems theory",
     "topics": [
      {
       "n": "83",
       "t": "CAP, PACELC and consistency models",
       "c": "Strong, eventual, read-your-writes and causal consistency"
      },
      {
       "n": "84",
       "t": "Time and ordering",
       "c": "Clock drift, NTP, Lamport clocks, vector clocks, TrueTime, last-write-wins"
      },
      {
       "n": "85",
       "t": "Consensus",
       "c": "Raft and Paxos, leader election, log replication, why quorums alone aren't enough"
      },
      {
       "n": "86",
       "t": "Membership and failure detection",
       "c": "Heartbeats, gossip protocols, split brain"
      },
      {
       "n": "87",
       "t": "Distributed locks",
       "c": "Redlock, ZooKeeper and etcd, leases, fencing tokens"
      },
      {
       "n": "88",
       "t": "Distributed transactions",
       "c": "Two-phase and three-phase commit, sagas (orchestration vs choreography), the outbox pattern"
      },
      {
       "n": "89",
       "t": "Delivery guarantees",
       "c": "At-most-once, at-least-once, exactly-once; idempotent consumers and de-duplication"
      },
      {
       "n": "90",
       "t": "Unique IDs at scale",
       "c": "UUID v4 and v7, Snowflake, ticket servers"
      }
     ]
    },
    {
     "id": "2.5",
     "title": "Messaging and data pipelines",
     "topics": [
      {
       "n": "91",
       "t": "Kafka internals",
       "c": "Append-only log, partitions and ordering, replication and in-sync replicas, retention"
      },
      {
       "n": "92",
       "t": "Kafka consumers",
       "c": "Consumer groups, offsets, rebalancing, exactly-once semantics"
      },
      {
       "n": "93",
       "t": "CQRS and event sourcing",
       "c": "Separate read and write models, event stores, eventual consistency"
      },
      {
       "n": "94",
       "t": "Change data capture",
       "c": "The outbox pattern, Debezium, keeping search indexes and caches in sync"
      },
      {
       "n": "95",
       "t": "Stream and batch processing",
       "c": "Windows, watermarks, stream joins (Flink, Spark), MapReduce, Lambda vs Kappa architecture"
      }
     ]
    },
    {
     "id": "2.6",
     "title": "Architecture and resilience",
     "topics": [
      {
       "n": "96",
       "t": "Microservice patterns",
       "c": "Service discovery, service mesh and sidecars, BFF, strangler-fig migration"
      },
      {
       "n": "97",
       "t": "Fault tolerance",
       "c": "Circuit breakers, bulkheads, load shedding, backpressure, graceful degradation, retry storms"
      },
      {
       "n": "98",
       "t": "Multi-region and disaster recovery",
       "c": "Active-active vs active-passive, RPO and RTO, geo-routing, data residency"
      },
      {
       "n": "99",
       "t": "Observability in depth",
       "c": "Distributed tracing (trace and span IDs), Prometheus pull vs push, ELK stack, alerting"
      },
      {
       "n": "100",
       "t": "Capacity planning and autoscaling",
       "c": "Kubernetes requests and limits, CPU throttling vs OOM kills, workers per core, the shock-absorber pattern"
      },
      {
       "n": "101",
       "t": "Security in depth",
       "c": "OAuth2 flows, JWT pitfalls, mutual TLS, encryption keys (KMS), DDoS protection, multi-tenant isolation"
      }
     ]
    },
    {
     "id": "2.7",
     "title": "Object-oriented design",
     "topics": [
      {
       "n": "102",
       "t": "OOP fundamentals",
       "c": "Encapsulation, inheritance, polymorphism, interfaces, composition over inheritance"
      },
      {
       "n": "103",
       "t": "SOLID principles",
       "c": "Each principle with a before-and-after refactor"
      },
      {
       "n": "104",
       "t": "Creational patterns",
       "c": "Factory, abstract factory, builder, prototype, singleton"
      },
      {
       "n": "105",
       "t": "Structural patterns",
       "c": "Adapter, facade, decorator, proxy, composite"
      },
      {
       "n": "106",
       "t": "Behavioral patterns",
       "c": "Strategy, command, observer, state, chain of responsibility, template method"
      },
      {
       "n": "107",
       "t": "How to run a low-level design interview",
       "c": "Requirements, entities, class diagram (UML), APIs, code, concurrency"
      },
      {
       "n": "108",
       "t": "Clean and hexagonal architecture",
       "c": "Ports and adapters, dependency inversion, a FastAPI app with the framework kept at the edge"
      },
      {
       "n": "109",
       "t": "Domain-driven design",
       "c": "Entities, value objects, aggregates, bounded contexts"
      },
      {
       "n": "110",
       "t": "Idempotency in code",
       "c": "Idempotency keys plus a database transaction that stops double charges"
      }
     ]
    }
   ]
  },
  {
   "id": "volume-3",
   "name": "Volume 3",
   "title": "High-level design case studies",
   "range": "Case studies C1–C33",
   "modules": [
    {
     "id": "",
     "title": "Warm-up: one main idea each",
     "topics": [
      {
       "n": "C1",
       "t": "URL shortener (TinyURL)",
       "c": "Base62 encoding, ID collisions, read-heavy caching at the edge, redirects"
      },
      {
       "n": "C2",
       "t": "Pastebin",
       "c": "Object storage vs database for large text, clean-up jobs for expired pastes"
      },
      {
       "n": "C3",
       "t": "Unique ID generator",
       "c": "Time-sortable 64-bit IDs at 100k per second, clock drift"
      },
      {
       "n": "C4",
       "t": "Distributed rate limiter",
       "c": "Token bucket in Redis, atomic Lua scripts, races across many servers"
      },
      {
       "n": "C5",
       "t": "Notification system (push, SMS, email)",
       "c": "Third-party limits and failures, priority queues, never sending twice"
      },
      {
       "n": "C6",
       "t": "Search autocomplete (typeahead)",
       "c": "Trie, precomputed top suggestions, CDN caching for heavy reads"
      },
      {
       "n": "C7",
       "t": "Web crawler",
       "c": "URL frontier, breadth-first crawling, politeness per domain, duplicate detection (SimHash)"
      },
      {
       "n": "C8",
       "t": "Distributed cache (like Redis)",
       "c": "Eviction, sharding with consistent hashing, replication, hot keys"
      },
      {
       "n": "C9",
       "t": "Key-value store (like DynamoDB)",
       "c": "Consistent hashing, quorum tuning, gossip and failure detection"
      },
      {
       "n": "C10",
       "t": "Distributed message queue (like Kafka)",
       "c": "Log storage, partitions, consumer offsets, replication"
      },
      {
       "n": "C11",
       "t": "Distributed job scheduler (cron at scale)",
       "c": "Leader election, running each job exactly once, retries"
      },
      {
       "n": "C12",
       "t": "Gaming leaderboard",
       "c": "Redis sorted sets, memory limits, sharding for 10M players"
      },
      {
       "n": "C13",
       "t": "Metrics and alerting (like Datadog)",
       "c": "Time-series databases, downsampling, push vs pull ingestion"
      }
     ]
    },
    {
     "id": "",
     "title": "Intermediate: several ideas working together",
     "topics": [
      {
       "n": "C14",
       "t": "Chat app (WhatsApp)",
       "c": "WebSockets, presence, offline message queues, delivery receipts, end-to-end encryption"
      },
      {
       "n": "C15",
       "t": "News feed (Twitter, Instagram)",
       "c": "Fan-out on write vs on read, the celebrity problem, ranking, media"
      },
      {
       "n": "C16",
       "t": "BookMyShow / Ticketmaster flash sale",
       "c": "Seat holds, no double booking, waiting rooms, payments"
      },
      {
       "n": "C17",
       "t": "E-commerce checkout (Flipkart, Amazon)",
       "c": "Cart, inventory reservation, orders, payment saga, flash sales"
      },
      {
       "n": "C18",
       "t": "Food delivery (Swiggy, Zomato)",
       "c": "Order state machine, restaurant and rider dispatch, live tracking, ETAs"
      },
      {
       "n": "C19",
       "t": "Hotel booking (Airbnb, Booking.com)",
       "c": "Availability search over date ranges, double booking across ranges, pricing"
      },
      {
       "n": "C20",
       "t": "Proximity service (Yelp, nearby friends)",
       "c": "Geohash, read/write separation, sparse regions"
      },
      {
       "n": "C21",
       "t": "Ride-hailing (Uber, Ola)",
       "c": "Millions of driver location updates, matching riders to drivers, quadtree vs geohash, surge pricing"
      },
      {
       "n": "C22",
       "t": "Dating app (Tinder)",
       "c": "Location plus attribute queries, two-way matching, caching recommendations"
      },
      {
       "n": "C23",
       "t": "Payment system (Stripe, Razorpay, UPI)",
       "c": "Idempotency, exactly-once processing, double-entry ledger, bank integrations, reconciliation"
      },
      {
       "n": "C24",
       "t": "Cloud storage (Dropbox, Google Drive)",
       "c": "File chunking, de-duplication, block-level sync, offline edits, resumable uploads"
      },
      {
       "n": "C25",
       "t": "Video streaming (YouTube, Netflix)",
       "c": "Upload and transcoding pipeline, HLS/DASH chunks, CDN routing"
      },
      {
       "n": "C26",
       "t": "Live streaming to millions (Hotstar, Twitch)",
       "c": "Video ingest, low-latency delivery, spikes of 25M+ concurrent viewers, scaling up before the match"
      }
     ]
    },
    {
     "id": "",
     "title": "Advanced: specialist depth",
     "topics": [
      {
       "n": "C27",
       "t": "Collaborative editor (Google Docs)",
       "c": "Operational transformation vs CRDTs, scaling WebSockets, version history"
      },
      {
       "n": "C28",
       "t": "Maps and navigation (Google Maps)",
       "c": "Map tiles, routing on road graphs (Dijkstra, A*), live-traffic ETAs"
      },
      {
       "n": "C29",
       "t": "Video conferencing (Zoom)",
       "c": "WebRTC, STUN and TURN servers, SFU vs MCU"
      },
      {
       "n": "C30",
       "t": "Distributed file system (HDFS, GFS)",
       "c": "Master node, chunk splitting, replication, nodes that fail silently"
      },
      {
       "n": "C31",
       "t": "Ad click aggregation and prediction",
       "c": "Joining click and impression streams (Kafka, Flink), real-time features, online model updates"
      },
      {
       "n": "C32",
       "t": "Exchange matching engine (stocks, crypto)",
       "c": "In-memory order book, latency, saving the ledger without slowing the matcher"
      },
      {
       "n": "C33",
       "t": "High-frequency trading platform",
       "c": "UDP multicast, kernel bypass, zero-garbage-collection memory, FPGA offload"
      }
     ]
    }
   ]
  },
  {
   "id": "volume-4",
   "name": "Volume 4",
   "title": "Low-level design case studies",
   "range": "Case studies L1–L19",
   "modules": [
    {
     "id": "",
     "title": "",
     "topics": [
      {
       "n": "L1",
       "t": "Parking lot",
       "c": "Class design, enums, finding the nearest free spot for each vehicle size"
      },
      {
       "n": "L2",
       "t": "Vending machine",
       "c": "State pattern, state transitions, giving correct change, blocking illegal states"
      },
      {
       "n": "L3",
       "t": "Elevator system (50 floors)",
       "c": "State management, dispatching several cars (LOOK and SCAN algorithms)"
      },
      {
       "n": "L4",
       "t": "Tic-tac-toe and chess engine",
       "c": "Modelling moves and boards, validation rules, checking for a win in O(1)"
      },
      {
       "n": "L5",
       "t": "Snake and ladder",
       "c": "Many players, dice interfaces, chained snakes and ladders in one turn"
      },
      {
       "n": "L6",
       "t": "Library management",
       "c": "Books vs copies, members, fines, two people checking out the same copy"
      },
      {
       "n": "L7",
       "t": "LRU cache",
       "c": "Doubly linked list plus hash map, O(1) eviction, thread safety"
      },
      {
       "n": "L8",
       "t": "Logging framework (like Log4j)",
       "c": "Chain of responsibility for log levels, asynchronous buffered file writes"
      },
      {
       "n": "L9",
       "t": "Hit counter",
       "c": "Sliding window with a circular array or deque, counting hits in the last 5 minutes"
      },
      {
       "n": "L10",
       "t": "Meeting room reservation",
       "c": "Interval trees for overlapping meetings, picking the best room by capacity"
      },
      {
       "n": "L11",
       "t": "Train platform management",
       "c": "Assigning trains to platforms with heaps and greedy algorithms"
      },
      {
       "n": "L12",
       "t": "In-memory file system",
       "c": "Trie and composite pattern, mkdir, cd, ls with wildcards"
      },
      {
       "n": "L13",
       "t": "Splitwise",
       "c": "Expense-sharing classes, graph algorithm to minimise the number of payments"
      },
      {
       "n": "L14",
       "t": "Amazon locker",
       "c": "Matching packages to locker sizes, OTPs, expired packages"
      },
      {
       "n": "L15",
       "t": "Food ordering (Zomato, Swiggy)",
       "c": "Order state machine (placed, cooking, out for delivery), cart pricing"
      },
      {
       "n": "L16",
       "t": "Cab booking (Uber)",
       "c": "Riders, drivers, trips, matching strategy, fare calculation"
      },
      {
       "n": "L17",
       "t": "BookMyShow",
       "c": "Concurrent seat booking, pessimistic vs optimistic locking in code"
      },
      {
       "n": "L18",
       "t": "Live auction and bidding",
       "c": "Simultaneous bids, highest-bidder state, notifying outbid users (observer, pub/sub)"
      },
      {
       "n": "L19",
       "t": "In-memory SQL-like database engine (finale)",
       "c": "Parsing, indexing structures, running SELECT, INSERT and WHERE"
      }
     ]
    }
   ]
  }
 ],
 "pages": {
  "18": "pages/18-vertical-vs-horizontal-scaling.html"
 }
};
