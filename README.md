
# Instructions:

## 1.  Compile the code on the terminal
```
make
```
## 2.  Execute
```
./a.out input_data output_data
```

## 3.  Docker:
```
## buld the docker
docker build -f ./Dockerfile -t devops:latest .

## enter into docker environment
docker run --privileged --rm -ti -v $PWD:/app/lbm_mrt devops:latest /bin/bash

## running the docker
docker run --privileged --rm -ti -v $PWD:/app/lbm_mrt devops:latest make && ./a.out input_data output_data
```

## 4. The Problem:

There are two objectives for this exercise:

1. Design a CI/CD pipeline in AWS for “full-stack-interview” repository
2. Design a simple frontend which retrieves an image file (“input-
image.dat” file in the input folder of “full-stack-interview” repository)
from a user and triggers a serverless AWS architecture which can
simultaneously run 10 batch simulation jobs of “full-stack-interview”
repository on 2 t2.nano EC2 instances and retrieve 10
corresponding output files and values.

The input files are located in default “input_data” folder. There are
10 “lbmPara.json” input files which are located in “batch_jobs”
folder. Every lbmPara.json file is associated with a simulation job.
Following the job id of each simulation, 10 separate folders must
be created in S3 bucket.

The correspondent output file is “xPerm_LBM.json” which is in
“output_data” folder. Each output file must be copied in a separate
(associated with the job id) S3 buckets. Furthermore, the values of
“Porosity” and “K_lbm” in the output json file has to be copied on
AWS RDS.

Write a script for the orchestration and execution of this pipeline
which provisions all the necessary AWS services while considering
automation, availability, cost efficiency and security of the entire
workflow.




