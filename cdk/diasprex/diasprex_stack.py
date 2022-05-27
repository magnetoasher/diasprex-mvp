import boto3
from aws_cdk import (
    core,
    aws_iam as _iam,
    aws_s3 as _s3,
    aws_s3_deployment as _s3_deployment,
    aws_cloudfront as _cloudfront
)


def check_if_bucket_exists(bucket):
    s3 = boto3.client("s3")
    try:
        s3.head_bucket(Bucket=bucket)
        return True
    except:
        return False


class DiasprexMVP(core.Stack):
    def __init__(self, scope: core.Construct, id: str, STAGE: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        bucket_name=f"diasprex-mvp-{STAGE}"

        web_app_bucket = _s3.Bucket(
            self, f"DiasprexMVPS3Bucket",
            removal_policy=core.RemovalPolicy.RETAIN,
            website_index_document="index.html",
            website_error_document="index.html",
            bucket_name=bucket_name
        ) if not check_if_bucket_exists(bucket_name) else _s3.Bucket.from_bucket_name(
            self, f"DiasprexMVPS3Bucket",
            bucket_name=bucket_name
        )
        web_app_bucket.grant_public_access()
        web_app_bucket.add_to_resource_policy(_iam.PolicyStatement(
            effect=_iam.Effect.ALLOW,
            principals=[_iam.AnyPrincipal()],
            actions=["s3:GetObject"],
            resources=[f"{web_app_bucket.bucket_arn}/*"],
        ))

        _s3_deployment.BucketDeployment(
            self, f"DiasprexMVPS3Deployment",
            sources=[_s3_deployment.Source.asset("../build")],
            destination_bucket=web_app_bucket,
            memory_limit=512
        )

        _cloudfront.CloudFrontWebDistribution(
            self, f"DiasprexMVPCFDistribution",
            origin_configs=[_cloudfront.SourceConfiguration(
                s3_origin_source=_cloudfront.S3OriginConfig(
                  s3_bucket_source=web_app_bucket
                ),
                behaviors=[_cloudfront.Behavior(is_default_behavior=True)]
            )],
            error_configurations=[
                _cloudfront.CfnDistribution.CustomErrorResponseProperty(
                    error_code=403,
                    error_caching_min_ttl=5,
                    response_code=200,
                    response_page_path="/index.html"
                ),
                _cloudfront.CfnDistribution.CustomErrorResponseProperty(
                    error_code=404,
                    error_caching_min_ttl=5,
                    response_code=200,
                    response_page_path="/index.html"
                )
            ]
        )
